import { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation.tsx';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Font, FontLoader } from 'three/addons/loaders/FontLoader.js';
import { Vertex, Edge, Graph } from './VisualizerUtilities.tsx';
import { VisualizerUtils } from './VisualizerUtilities.tsx';
import '../styles/Graph.css';

let font: Font;
let shiftKeyPress: boolean = false;

const CrossoverGraphThree = () => {
    const mountRef = useRef<HTMLDivElement>(null);         // hold the canvas
    const graphDataRef = useRef<Graph | null>(null);       // holds graph data
    const animationIdRef = useRef<number | null>(null);    // holds current animation frame
    const selectedVertexRef = useRef<Vertex | null>(null); // holds currently selected node (handles updates in the useeffect)

    const allEdgesRef = useRef<THREE.LineSegments | null>(null);      // holds all edges (reverts back to this if shift is not held down) 
    const visibleEdgesRef = useRef<THREE.LineSegments | null>(null);  // holds visible edges (handles udpates in useeffect);

    const [selectedVertex, setSelectedVertex] = useState<Vertex | null>(null); // same as selectedVertexRef, but needed to trigger rerenders of the box in the bottom left with the franchise name
    const [shiftKey, setShiftKey] = useState<boolean>(false); // is the shift key being held (needed to trigger rerender of the box in the bottom left)

    useEffect(() => {
        if (!mountRef.current) return;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);
        camera.position.z = 50;
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        let currentInfoBox: THREE.Group | null = null;

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.target.set(0, 0, 0);
        controls.update();

        // const ambientLight = new THREE.AmbientLight(0x404040, 10);
        // scene.add(ambientLight);

        // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        // directionalLight.position.set(10, 10, 5);
        // directionalLight.castShadow = true;
        // scene.add(directionalLight);

        // const pointLight = new THREE.PointLight(0xFFFFFF, 1000.0);
        // pointLight.position.set(0, 0, 0);
        // pointLight.castShadow = false;
        // scene.add(pointLight);

        const stats = new Stats();
        stats.showPanel(0);
        mountRef.current.appendChild(stats.dom);


        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);



        fetch('http://127.0.0.1:8000/graph')
            .then(response => {
                return response.json();
            })
            .then((data: Graph) => {
                // by default, the graph data sent over is unscaled and an array of 3 numbers
                // as soon as data is received, scale the positions and store it as a three.vector3 so i dont have to rescale it everywhere else
                // "as unknown as [n n n]" is to silence the type error thing because it comes in as [number number number] and i dont wanna change the graph type to have [n n n] because it messes up stuff elsewhere
                data.nodes.forEach((node: Vertex) => {
                    node.position = new THREE.Vector3(...(node.position as unknown as [number, number, number]).map(c => c * VisualizerUtils.posScale));
                })

                graphDataRef.current = data;
                console.log(data)

                // const [nodes, edges] = VisualizerUtils.GenerateGraphMesh(data, camera);
                // scene.add(nodes);
                // scene.add(edges);
                scene.add(VisualizerUtils.GenerateGraphNodes(data))

                const edges = VisualizerUtils.GenerateGraphEdges(data, camera);
                visibleEdgesRef.current = edges ?? null;
                allEdgesRef.current = edges ?? null;

                if (visibleEdgesRef.current) scene.add(visibleEdgesRef.current);
                // scene.add(sw)
            });

        const raycaster = new THREE.Raycaster();
        const pointer = new THREE.Vector2();
        let cursorIsOverCanvas: boolean = false;

        const onKeyPress = (event: KeyboardEvent) => { if (event.shiftKey) { shiftKeyPress = true; setShiftKey(true) } }
        const onKeyRelease = (event: KeyboardEvent) => { if (event.key === "Shift") { shiftKeyPress = false; setShiftKey(false) } }
        const onMouseLeave = () => { cursorIsOverCanvas = false; }
        const onMouseMove = (event: MouseEvent) => {
            const rect = renderer.domElement.getBoundingClientRect();
            pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

            cursorIsOverCanvas = (event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom);
        }

        renderer.domElement.addEventListener('pointerleave', onMouseLeave);
        renderer.domElement.addEventListener('pointermove', onMouseMove);
        document.addEventListener('keydown', onKeyPress);
        document.addEventListener('keyup', onKeyRelease);

        const selectionSphere = new THREE.Mesh(
            new THREE.SphereGeometry(0.101, 16, 16),
            new THREE.MeshStandardMaterial({
                color: 0x0077ff,
                emissive: 0x0077ff,
                emissiveIntensity: 20,
            })
        );

        const RenderAllShapes = () => {
            stats.begin();
            controls.update();

            if (cursorIsOverCanvas) {
                // raycast
                raycaster.setFromCamera(pointer, camera);
                const intersections = raycaster.intersectObjects(scene.children);
                const sphereIntersection = intersections.find((intersection: THREE.Intersection) => intersection.object instanceof THREE.InstancedMesh);

                // if mouse is hovering over a node
                if (sphereIntersection) {
                    // get the vertex under the cursor
                    const clickedNode: Vertex = graphDataRef.current?.nodes[sphereIntersection.instanceId];
                    selectedVertexRef.current = clickedNode;
                    setSelectedVertex(clickedNode);

                    // create new floating 3d text for this franchise name
                    if (currentInfoBox) scene.remove(currentInfoBox);
                    currentInfoBox = VisualizerUtils.CreateInfoBoxMeshGeometry(font, clickedNode);
                    scene.add(currentInfoBox);

                    // position selection sphere at the selected vertex
                    selectionSphere.position.copy(clickedNode.position);
                    const scale = VisualizerUtils.sizeScale(clickedNode.value);
                    selectionSphere.scale.set(scale, scale, scale);
                    scene.add(selectionSphere);

                    // if the shift key is being held, highlight only the edges from the selected vertex to fortnite
                    if (shiftKeyPress && graphDataRef.current && visibleEdgesRef.current) {
                        scene.remove(visibleEdgesRef.current)

                        const edges = VisualizerUtils.GenerateGraphEdges(graphDataRef.current, camera, clickedNode.id);
                        visibleEdgesRef.current = edges ?? null;

                        if (visibleEdgesRef.current) scene.add(visibleEdgesRef.current);
                    } else {
                        scene.remove(visibleEdgesRef.current!);
                        visibleEdgesRef.current = allEdgesRef.current!;
                        scene.add(visibleEdgesRef.current);
                    }

                } else {
                    // if no intersection, remove selection sphere, delete the info box, and default to showing all edges
                    scene.remove(selectionSphere);
                    if (currentInfoBox) {
                        scene.remove(currentInfoBox);
                        currentInfoBox = null;
                        selectedVertexRef.current = null;
                        setSelectedVertex(null)
                    }

                    if (visibleEdgesRef.current) {
                        scene.remove(visibleEdgesRef.current);
                        visibleEdgesRef.current = allEdgesRef.current!;
                        scene.add(visibleEdgesRef.current);
                    }
                }
            }

            // position the 3d text to always be to the right of the selected sphere, and rotated to face the camera
            if (currentInfoBox && selectedVertexRef.current) {
                const selectedVertex = selectedVertexRef.current;
                const nodePos = selectedVertex.position.clone();

                const cameraToNodeDir = nodePos.clone().sub(camera.position).normalize();

                // get camera right
                const cameraRight = new THREE.Vector3();
                camera.getWorldDirection(cameraRight);
                cameraRight.cross(camera.up).normalize();

                // project camera's right vector onto the plane perpendicular to camera-to-node direction
                const projectedRight = cameraRight.clone();
                projectedRight.sub(cameraToNodeDir.clone().multiplyScalar(cameraRight.dot(cameraToNodeDir)));
                projectedRight.normalize();

                const scalar = 0.15 * VisualizerUtils.sizeScale(selectedVertex.value);
                currentInfoBox.position.copy(nodePos.add(projectedRight.multiplyScalar(scalar)));
                currentInfoBox.lookAt(camera.position);
            }

            renderer.render(scene, camera);
            stats.end();
            animationIdRef.current = requestAnimationFrame(RenderAllShapes);
        };

        // can only hide the scrollbar on this page by setting the body to have overflow: hidden
        // but that affects it globally and prevents scrolling on all other pages too
        // add this no-scroll property when the page is loaded, and remove it when it is unloaded
        document.body.classList.add("no-scroll");

        const fontLoader = new FontLoader();
        fontLoader.load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json", function (f: Font) {
            font = f;
            RenderAllShapes();
        })


        return () => {
            if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);

            window.removeEventListener('resize', handleResize);
            renderer.domElement.removeEventListener('pointerleave', onMouseLeave);
            renderer.domElement.removeEventListener('pointermove', onMouseMove);
            document.addEventListener('keydown', onKeyPress);
            document.addEventListener('keyup', onKeyRelease);
            document.body.classList.remove('no-scroll')

            renderer.dispose();
        };
    }, []);

    return (
        <>
            <Navigation />
            <div
                ref={mountRef}
                className='canvas'
            >
                {selectedVertex && (
                    <div className='selectionInfo'>
                        <h3 style={{ margin: "0px", textAlign: "left" }}>{selectedVertex.name}</h3>
                        {shiftKey && graphDataRef.current &&
                            <p style={{ marginTop: "0px" }}>
                                {VisualizerUtils.PrintHopsFromFortnite(graphDataRef.current.paths[selectedVertex.id].length, selectedVertex.name)}
                            </p>
                        }
                    </div>
                )}
            </div>

        </>
    );
};

export default CrossoverGraphThree;
