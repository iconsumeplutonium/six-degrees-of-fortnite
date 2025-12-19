import * as THREE from 'three';
import { Vertex, Edge, Graph } from '../types';

export namespace VisualizerUtils {
	export const posScale = 800;
	export const sizeScale = (x: number) => { return Math.min(Math.max(x, 10), 100); };
	export const nodeIDtoPosition: Record<number, THREE.Vector3> = {};

	export function GenerateGraphNodes(graph: Graph, camera: THREE.Camera) {
		const sphereMaterial = new THREE.ShaderMaterial({
			uniforms: {
				topRight: { value: new THREE.Vector3(1, 1, 1) },
				camPos: { value: camera.position }
			},
			vertexShader: `
				precision mediump float;
				varying vec3 vNormal;
				varying vec4 worldPos;

				void main() {
					vNormal = normal;
					worldPos = instanceMatrix * vec4(position, 1.0);
					gl_Position = projectionMatrix * viewMatrix * instanceMatrix * vec4(position, 1.0);
				}
			`,
			fragmentShader: `
				precision mediump float;
				uniform vec3 topRight;
				uniform vec3 camPos;

				varying vec3 vNormal;
				varying vec4 worldPos;
				
				void main() {
					float distFromCamera = length(worldPos.xyz - camPos);
					// if (distFromCamera > 500.0) {
					// 	discard;
					// }

					float strength = clamp(dot(normalize(topRight), vNormal), 0.0, 1.0);
					gl_FragColor = vec4(vec3(0.0, 0.46, 1.0) * strength, 1.0);
				}
			`
		});


		// instanced rendering of spheres for each node in the graph
		const nodeMesh = new THREE.InstancedMesh(
			new THREE.SphereGeometry(0.1, 16, 16),
			sphereMaterial,
			graph.nodes.length
		);

		const matrix = new THREE.Matrix4();
		graph.nodes.forEach((node: Vertex, index: number) => {
			matrix.makeTranslation(node.position);
			matrix.scale(new THREE.Vector3(sizeScale(node.value), sizeScale(node.value), sizeScale(node.value)));
			nodeMesh.setMatrixAt(index, matrix);
		});

		nodeMesh.instanceMatrix.needsUpdate = true;
		return nodeMesh;
	}

	export function GenerateGraphEdges(graph: Graph, camera: THREE.Camera, pathStartVertexID: number = -1, shouldDoCustomFade: boolean = false) {
		// instanced rendering of lines for each edge in the graph with distance-based fading
		const points: THREE.Vector3[] = [];

		// no source specified, just show all of them 
		if (pathStartVertexID < 0) {
			graph.links.forEach((link: Edge) => {
				points.push(
					nodeIDtoPosition[link.source],
					nodeIDtoPosition[link.target]
				);
			});
		} else {
			// source is specified, only show edges in its path 
			const path: number[] = graph.paths[pathStartVertexID];
			let source = pathStartVertexID;
			for (let i = 0; i < path.length; i++) {
				points.push(
					nodeIDtoPosition[source],
					nodeIDtoPosition[path[i]]
				);

				source = path[i];
			}
		}

		const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
		const lineMaterial = new THREE.ShaderMaterial({
			uniforms: {
				camPos: { value: camera.position },
				color: { value: new THREE.Color(0xFFFFFF) },
				shouldDoCustomFade: {value: shouldDoCustomFade}
			},
			vertexShader: `
				precision mediump float;
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
				uniform bool shouldDoCustomFade;
				
				varying vec3 vWorldPosition;
				
				void main() {
					float distFromCamera = length(vWorldPosition - camPos);
					float farScale   = 1.0 - clamp(distFromCamera / 1500.0, 0.0, 1.0);

					if (!shouldDoCustomFade)
						gl_FragColor = vec4(color, farScale);
					else {
						float closeScale = 1.0 - clamp(distFromCamera / 300.0, 0.0, 1.0);
						float t = smoothstep(200.0, 1500.0, distFromCamera);
						float alpha = mix(closeScale, farScale, t);
	
						gl_FragColor = vec4(color, alpha);
					}

				}
			`,
			transparent: true
		});

		return new THREE.LineSegments(lineGeometry, lineMaterial);
	}

	export function PrintHopsFromFortnite(hops: number, name: string) {
		if (hops == 0)
			return (name === "Fortnite") ? "The Center of the Multiverse" : "No path to Fortnite";
		else
			return `${hops} hop${hops > 1 ? "s" : ""} away from Fortnite`;
	}

	export function areVecsEqual(v1: THREE.Vector2, v2: THREE.Vector2) {
		const epsilon = 0.001;
		return (Math.abs(v1.x - v2.x) < epsilon) && (Math.abs(v1.y - v2.y) < epsilon);
	}
}