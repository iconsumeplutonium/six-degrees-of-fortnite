import { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation.tsx';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
import { Font, FontLoader } from 'three/addons/loaders/FontLoader.js';
import { Vertex, Graph } from './VisualizerUtilities.tsx';
import { VisualizerUtils } from './VisualizerUtilities.tsx';
import SelectedNode from '../components/SelectedNode.tsx';
import '../styles/Graph.css';

let font: Font;

const CrossoverGraphThree = () => {
    const mountRef = useRef<HTMLDivElement>(null);         // hold the canvas
    const graphDataRef = useRef<Graph | null>(null);       // holds graph data
    const animationIdRef = useRef<number | null>(null);    // holds current animation frame
    const selectedVertexRef = useRef<Vertex | null>(null); // holds currently selected node (handles updates in the useeffect)
    const [selectedVert, setSelectedVert] = useState<Vertex | null>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x222222);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const labelRenderer = new CSS2DRenderer();
        labelRenderer.setSize(window.innerWidth, window.innerHeight);
        labelRenderer.domElement.style.position = 'absolute';
        labelRenderer.domElement.style.top = '0px';
        labelRenderer.domElement.style.pointerEvents = 'none';
        mountRef.current.appendChild(labelRenderer.domElement);
        let currentInfoBox: THREE.Group | null = null;

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            labelRenderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.screenSpacePanning = false;

        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(10, 10, 5);
        directionalLight.castShadow = true;
        scene.add(directionalLight);

        const stats = new Stats();
        stats.showPanel(0);
        mountRef.current.appendChild(stats.dom);

        fetch('http://127.0.0.1:8000/graph')
            .then(response => {
                return response.json();
            })
            .then((data: Graph) => {
                graphDataRef.current = data;

                const [nodes, edges] = VisualizerUtils.GenerateGraphMesh(data, camera);
                scene.add(nodes);
                scene.add(edges);
            });

        const raycaster = new THREE.Raycaster();
        const pointer = new THREE.Vector2();
        let isOverCanvas: boolean = false;
        let hasClicked: boolean = false;

        const handleClick = () => { hasClicked = true; };
        const onMouseLeave = () => { isOverCanvas = false; }
        const onMouseMove = (event: MouseEvent) => {
            const rect = renderer.domElement.getBoundingClientRect();
            pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

            isOverCanvas = (event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom);
        }

        renderer.domElement.addEventListener('click', handleClick)
        renderer.domElement.addEventListener('pointerleave', onMouseLeave);
        renderer.domElement.addEventListener('pointermove', onMouseMove);

        const selectionSphereGeometry = new THREE.SphereGeometry(0.101, 16, 16);
        const selectionSphereMaterial = new THREE.MeshStandardMaterial({
            color: 0x0077ff,
            emissive: 0x0077ff,
            emissiveIntensity: 20,
        });
        const selectionSphere = new THREE.Mesh(selectionSphereGeometry, selectionSphereMaterial);



        const RenderAllShapes = () => {
            stats.begin();
            controls.update();
            if (isOverCanvas) {
                hasClicked = false;

                raycaster.setFromCamera(pointer, camera);
                const intersections = raycaster.intersectObjects(scene.children);
                const sphereIntersection = intersections.find((intersection: THREE.Intersection) => intersection.object instanceof THREE.InstancedMesh);

                if (sphereIntersection) console.log(sphereIntersection.distance);

                if (sphereIntersection && sphereIntersection.distance <= 35) {
                    const clickedNode: Vertex = graphDataRef.current?.nodes[sphereIntersection.instanceId];
                    selectedVertexRef.current = clickedNode;
                    setSelectedVert(clickedNode);
                    // console.log(clickedNode)

                    const clickedNodePosWorldSpace = new THREE.Vector3(...clickedNode.position.map(c => c * VisualizerUtils.posScale));

                    if (currentInfoBox) scene.remove(currentInfoBox);
                    const dir = new THREE.Vector3();
                    camera.getWorldDirection(dir);
                    const right = dir.cross(camera.up);

                    currentInfoBox = VisualizerUtils.CreateInfoBoxMeshGeometry(font, clickedNode);
                    // currentInfoBox.position.copy(clickedNodePosWorldSpace);
                    scene.add(currentInfoBox);


                    selectionSphere.position.copy(clickedNodePosWorldSpace);

                    const scale = VisualizerUtils.sizeScale(clickedNode.value);
                    selectionSphere.scale.set(scale, scale, scale);

                    scene.add(selectionSphere);
                } else {
                    scene.remove(selectionSphere);
                    if (currentInfoBox) {
                        scene.remove(currentInfoBox);
                        currentInfoBox = null;
                        selectedVertexRef.current = null;
                        setSelectedVert(null);
                    }
                }
            }

            // rotate the 3d text to always be to the right of the selected sphere, and rotated to face the camera
            if (currentInfoBox && selectedVertexRef.current) {
                const selectedVertex = selectedVertexRef.current;
                const nodePos = new THREE.Vector3(...selectedVertex.position.map(c => c * VisualizerUtils.posScale) as [number, number, number]);

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
            // labelRenderer.render(scene, camera);
            stats.end();
            animationIdRef.current = requestAnimationFrame(RenderAllShapes);
        };

        const fontLoader = new FontLoader();
        fontLoader.load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json", function (f: Font) {
            font = f;
            RenderAllShapes();
        })


        return () => {
            if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);

            window.removeEventListener('resize', handleResize);
            renderer.domElement.removeEventListener('click', handleClick)
            renderer.domElement.removeEventListener('pointerleave', onMouseLeave);
            renderer.domElement.removeEventListener('pointermove', onMouseMove);

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
                {selectedVert && (
                    <div className='selectionInfo'>
                        <h2 style={{ margin: "0px" }}>{selectedVert.name}</h2>
                        <small>{selectedVert.value} links to other franchises</small>
                    </div>
                )}
            </div>

        </>
    );
};

export default CrossoverGraphThree;
