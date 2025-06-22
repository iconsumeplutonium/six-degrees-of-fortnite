import * as THREE from 'three';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { Font, FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

export type Vertex = {
    id: number;
    name: string;
    value: number;
    position: number[];
}

export type Edge = {
    source: number;
    target: number;
}

export type Graph = {
    nodes: Vertex[],
    links: Edge[]
}


export namespace VisualizerUtils {
    export const posScale = 800;
    export const sizeScale = (x: number) => { return 10 + x };

    export function GenerateGraphMesh(graph: Graph, camera: THREE.Camera) {
        // instanced rendering of spheres for each node in the graph
        const sphereGeometry = new THREE.SphereGeometry(0.1, 16, 16);
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x0077ff });
        const nodeMesh = new THREE.InstancedMesh(sphereGeometry, sphereMaterial, graph.nodes.length);

        const worldSpaceNodePos: THREE.Vector3[] = [];

        const matrix = new THREE.Matrix4();
        graph.nodes.forEach((node: Vertex, index: number) => {
            const nodePos = new THREE.Vector3(...node.position.map(c => c * posScale));
            
            worldSpaceNodePos.push(nodePos);
            matrix.makeTranslation(nodePos);
            matrix.scale(new THREE.Vector3(sizeScale(node.value), sizeScale(node.value), sizeScale(node.value)));
            nodeMesh.setMatrixAt(index, matrix);
        });

        nodeMesh.instanceMatrix.needsUpdate = true;
        // scene.add(instancedMesh);

        console.log(worldSpaceNodePos)


        // instanced rendering of lines for each edge in the graph with distance-based fading
        const points: THREE.Vector3[] = [];
        graph.links.forEach((link: Edge) => {
            const sourceNode = graph.nodes.find((node: Vertex) => node.id === link.source);
            const targetNode = graph.nodes.find((node: Vertex) => node.id === link.target);

            if (!sourceNode || !targetNode) return; //literally will never happen, just to silence the linter

            points.push(
                new THREE.Vector3(...sourceNode.position.map(c => c * posScale)),
                new THREE.Vector3(...targetNode.position.map(c => c * posScale))
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

                            // todo: maybe make it so that the edges are visible close to a node, but fade out the further they are from one


                            float alpha = 1.0 - smoothstep(0.0, updatedFadeDist, distFromCamera);
                            gl_FragColor = vec4(color, alpha);
                        }
                    `,
            transparent: true
        });

        const lines = new THREE.LineSegments(lineGeometry, new THREE.MeshBasicMaterial({color: 0xFFFFFF}));

        return [nodeMesh, lines];
    }


    // Create info box element
    function createInfoBox(node: Vertex) {
        const div = document.createElement('div');
        div.className = 'node-info';
        div.innerHTML = `
        <h3>${node.name}</h3>
        <p>Connections: ${node.value}</p>
    `;
        div.style.fontSize = '10px';
        div.style.padding = '6px 0px';


        const cssobj = new CSS2DObject(div);

        return cssobj;
    };


    // choose a point that is always to the right of the current selected vertex 
    export function CreateInfoBoxMeshGeometry(font: Font, node: Vertex) {
        const geometry = new TextGeometry(`${node.name}`, {
            font: font,
            size: 0.05 * sizeScale(node.value),
            depth: 0,
            curveSegments: 12
        });


        const textMesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            depthTest: false, //this forces it to render on top of everything else 
            depthWrite: false,
            transparent: true
        }));

        textMesh.geometry.computeBoundingBox();
        const boundingBox = textMesh.geometry.boundingBox!;

        //background for the text
        const backdropGeo = new THREE.BoxGeometry(
            boundingBox.max.x - boundingBox.min.x + 0.1, 
            boundingBox.max.y - boundingBox.min.y + 0.1,
            0.01
        );
        const backdropMat = new THREE.MeshBasicMaterial({
            color: 0x000000,
            depthTest: false,
            depthWrite: false,
            transparent: true
        })
        const backdropMesh = new THREE.Mesh(backdropGeo, backdropMat);        
        backdropMesh.position.set(
            (boundingBox.max.x + boundingBox.min.x) / 2,
            (boundingBox.max.y + boundingBox.min.y) / 2,
            -0.001
        );

        //force backdrop to be rendered first, then text mesh on top of that, then everything else behind it
        backdropMesh.renderOrder = 1;
        textMesh.renderOrder = 2;
        

        const group = new THREE.Group();
        group.add(backdropMesh);
        group.add(textMesh);

        return group;
    }
}