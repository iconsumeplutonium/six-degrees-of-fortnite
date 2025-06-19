import { useEffect, useRef } from 'react';
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

const CrossoverGraphThree = () => {
    const mountRef = useRef<HTMLDivElement>(null);

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
            .then(data => {
                console.log(data);

                // instanced rendering of spheres for each node in the graph
                const sphereGeometry = new THREE.SphereGeometry(0.1, 16, 16);
                const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x0077ff });

                const instancedMesh = new THREE.InstancedMesh(sphereGeometry, sphereMaterial, data.nodes.length);
                instancedMesh.castShadow = true;
                instancedMesh.receiveShadow = true;

                const matrix = new THREE.Matrix4();
                const posScale = 100;
                const sizeScale = (x: number) => { return Math.cbrt(x) };
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

        const animate = () => {
            stats.begin();
            controls.update();
            renderer.render(scene, camera);
            stats.end();
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
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
