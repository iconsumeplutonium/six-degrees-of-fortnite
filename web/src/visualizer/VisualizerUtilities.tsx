import * as THREE from 'three';
import { Font } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

export type Vertex = {
    id: number;
    name: string;
    value: number;
    position: THREE.Vector3;
}

export type Edge = {
    source: number;
    target: number;
}

export type Graph = {
    nodes: Vertex[],
    links: Edge[],
    paths: Record<number, number[]>
}


export namespace VisualizerUtils {
    export const posScale = 800;
    export const sizeScale = (x: number) => { return Math.min(Math.max(x, 10), 100); };

    export function GenerateGraphNodes(graph: Graph) {
        // instanced rendering of spheres for each node in the graph
        const sphereGeometry = new THREE.SphereGeometry(0.1, 16, 16);
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x0077ff });
        const nodeMesh = new THREE.InstancedMesh(sphereGeometry, sphereMaterial, graph.nodes.length);

        // const selectionSphereGeometry = new THREE.SphereGeometry(0.101, 16, 16);
        // const selectionSphereMaterial = new THREE.MeshStandardMaterial({
        //     color: 0xff0000
        // });
        // const selectionSphere = new THREE.Mesh(selectionSphereGeometry, selectionSphereMaterial);

        // const NODETOFIND = "Oil Panic";

        const matrix = new THREE.Matrix4();
        graph.nodes.forEach((node: Vertex, index: number) => {
            // if (node.name === NODETOFIND) {
            //     selectionSphere.position.set(...node.position.map(c => c * posScale) as [number, number, number]);
            //     selectionSphere.scale.set(50, 50, 50);
            // }

            matrix.makeTranslation(node.position);
            matrix.scale(new THREE.Vector3(sizeScale(node.value), sizeScale(node.value), sizeScale(node.value)));
            nodeMesh.setMatrixAt(index, matrix);
        });
        // nodeMesh.layers.enable(1);
        nodeMesh.instanceMatrix.needsUpdate = true;

        return nodeMesh;
    }

    export function GenerateGraphEdges(graph: Graph, camera: THREE.Camera, pathStartVertexID: number = -1) {
        // instanced rendering of lines for each edge in the graph with distance-based fading
        const points: THREE.Vector3[] = [];

        // no edge specified, just show all of them 
        if (pathStartVertexID < 0) {
            graph.links.forEach((link: Edge) => {
                const sourceNode = graph.nodes.find((node: Vertex) => node.id === link.source);
                const targetNode = graph.nodes.find((node: Vertex) => node.id === link.target);

                if (!sourceNode || !targetNode) return; //literally will never happen, just to silence the linter

                points.push(
                    sourceNode.position,
                    targetNode.position
                );
            });
        } else {
            const path: number[] = graph.paths[pathStartVertexID];
            let source = pathStartVertexID;
            for (let i = 0; i < path.length; i++) {
                //probably very bad for performance, but it seems to work good enough i guess
                const sourceNode = graph.nodes.find((node: Vertex) => node.id === source);
                const targetNode = graph.nodes.find((node: Vertex) => node.id === path[i]);

                if (!sourceNode || !targetNode) return; //literally will never happen, just to silence the linter

                points.push(
                    sourceNode.position,
                    targetNode.position
                );

                source = path[i];
            }            
        }

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
                            float dist01 = 1.0 - clamp(distFromCamera / 1000.0, 0.0, 1.0);

                            gl_FragColor = vec4(color, dist01);
                        }
                    `,
            transparent: true
        });

        return new THREE.LineSegments(lineGeometry, lineMaterial);
    }

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
            boundingBox.max.x - boundingBox.min.x + 0.4,
            boundingBox.max.y - boundingBox.min.y + 0.4,
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

    export function PrintHopsFromFortnite(hops: number, name: string) {
        if (hops == 0) 
            return (name === "Fortnite") ? "The Center of the Universe" : "No path to Fortnite";
        else
            return `${hops} hop${hops > 1 ? "s" : ""} away from Fortnite`;
    }
}