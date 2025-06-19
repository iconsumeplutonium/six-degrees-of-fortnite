import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Navigation from './components/Navigation';
import Stats from 'stats-js';

type Vertex = {
    id: number;
    name: string;
    value: number;
    position: number[];
}

type Edge = {
    source: number;
    target: number;
}

type Graph = {
    nodes: Vertex[],
    links: Edge[]
}

const posScale = 100;
const sizeScale = (x: number) => { return Math.cbrt(x) };

const CrossoverGraphThree = () => {
    const mountRef = useRef<HTMLDivElement>(null);      // hold the canvas
    const graphDataRef = useRef<Graph | null>(null);    // holds graph data
    const animationIdRef = useRef<number | null>(null); // holds current animation frame


    useEffect(() => {
        if (!mountRef.current) return;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x222222);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        // renderer.shadowMap.enabled = true;
        // renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        mountRef.current.appendChild(renderer.domElement);

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
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
                console.log(data);
                // setGraphData(data);
                graphDataRef.current = data;

                // instanced rendering of spheres for each node in the graph
                const sphereGeometry = new THREE.SphereGeometry(0.1, 16, 16);
                const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x0077ff });
                const instancedMesh = new THREE.InstancedMesh(sphereGeometry, sphereMaterial, data.nodes.length);

                const matrix = new THREE.Matrix4();
                data.nodes.forEach((node: Vertex, index: number) => {
                    matrix.makeTranslation(node.position[0] * posScale, node.position[1] * posScale, node.position[2] * posScale);
                    matrix.scale(new THREE.Vector3(sizeScale(node.value), sizeScale(node.value), sizeScale(node.value)));
                    instancedMesh.setMatrixAt(index, matrix);
                });

                instancedMesh.instanceMatrix.needsUpdate = true;
                scene.add(instancedMesh);


                // instanced rendering of lines for each edge in the graph with distance-based fading
                const points: THREE.Vector3[] = [];
                data.links.forEach((link: Edge) => {
                    const sourceNode = data.nodes.find((node: Vertex) => node.id === link.source);
                    const targetNode = data.nodes.find((node: Vertex) => node.id === link.target);
                    points.push(
                        new THREE.Vector3(sourceNode.position[0] * posScale, sourceNode.position[1] * posScale, sourceNode.position[2] * posScale),
                        new THREE.Vector3(targetNode.position[0] * posScale, targetNode.position[1] * posScale, targetNode.position[2] * posScale)
                    );

                });

                const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
                const lineMaterial = new THREE.ShaderMaterial({
                    uniforms: {
                        camPos: { value: camera.position },
                        color: { value: new THREE.Color(0xFFFFFF) },
                    },
                    vertexShader: `
                        varying vec3 vWorldPosition;
                        void main() {
                            vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                            vWorldPosition = worldPosition.xyz;
                            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                        }
                    `,
                    fragmentShader: `
                        precision mediump float;
                        uniform vec3 camPos;
                        uniform vec3 color;
                        uniform float fadeDistance;
                        uniform float minAlpha;
                        varying vec3 vWorldPosition;
                        
                        void main() {
                            float distFromCamera = length(vWorldPosition - camPos);
                            float distFromOrigin = length(camPos);

                            // map from range [0, +inf) down to [0, 100]
                            float distFromOrigin01 = smoothstep(0.0, 100.0, distFromOrigin);

                            // when near the center of the graph, the fade distance should be 5.0, so only edges close to the camera are visible
                            // otherwise it becomes a very laggy mess and the entire screen is covered with white lines
                            // when near the outisde of the graph, the fade distance should be 50.0 so we can see more edges (if we're near the edge theres less edges to clog the screen)
                            float updatedFadeDist = mix(1.0, 75.0, distFromOrigin01);


                            float alpha = 1.0 - smoothstep(0.0, updatedFadeDist, distFromCamera);
                            gl_FragColor = vec4(color, alpha);
                        }
                    `,
                    transparent: true
                });

                const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
                scene.add(lines);
            });

        const raycaster = new THREE.Raycaster();
        const pointer = new THREE.Vector2();
        let isOverCanvas: boolean = false;
        let hasClicked: boolean = false;

        const handleClick = (_: MouseEvent) => { hasClicked = true; };
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
            if (isOverCanvas && hasClicked) {
                hasClicked = false;

                raycaster.setFromCamera(pointer, camera);
                const intersections = raycaster.intersectObjects(scene.children);
                const sphereIntersection = intersections.find((intersection: THREE.Intersection) => intersection.object instanceof THREE.InstancedMesh);

                if (sphereIntersection) {
                    const clickedNode = graphDataRef.current?.nodes[sphereIntersection.instanceId];

                    console.log(clickedNode)

                    // Set position and scale directly
                    selectionSphere.position.set(
                        clickedNode.position[0] * posScale,
                        clickedNode.position[1] * posScale,
                        clickedNode.position[2] * posScale
                    );

                    const scale = sizeScale(clickedNode.value);
                    selectionSphere.scale.set(scale, scale, scale);

                    scene.add(selectionSphere);
                } else {
                    scene.remove(selectionSphere);
                }
            }

            renderer.render(scene, camera);
            stats.end();
            animationIdRef.current = requestAnimationFrame(RenderAllShapes);
        };

        RenderAllShapes();

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
                style={{
                    width: '90vw',
                    height: '80vh',
                    overflow: 'hidden',
                    position: 'fixed',
                    top: '10%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
            />
            <style>{`
                body {
                    overflow: hidden;
                }
            `}</style>
        </>
    );
};

export default CrossoverGraphThree;
