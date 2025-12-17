import { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation.tsx';
import GraphInfo from '../components/GraphInfo.tsx';
import { VisualizerUtils } from './VisualizerUtilities.tsx';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Vertex, Graph } from '../types.ts';
import { API_URL } from '../constants.ts';
import '../styles/Graph.css';

let shiftKeyPress: boolean = false;

export default function CrossoverGraphThree() {
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

		let nodeMesh: THREE.InstancedMesh;

		const scene = new THREE.Scene();
		scene.background = new THREE.Color(0x000000);

		const camera = new THREE.PerspectiveCamera(75, mountRef.current!.clientWidth / mountRef.current!.clientHeight, 0.1, 100000);
		camera.position.z = 1000;
		camera.lookAt(0, 0, 0);

		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(mountRef.current!.clientWidth, mountRef.current!.clientHeight);
		mountRef.current.appendChild(renderer.domElement);

		const controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.dampingFactor = 0.25;
		controls.target.set(0, 0, 0);
		controls.update();

		const stats = new Stats();
		stats.showPanel(0);
		stats.dom.style.position = 'absolute';  //force it to be in the top right corner instead of top left
		stats.dom.style.top = '0px';
		stats.dom.style.right = '0px';
		stats.dom.style.left = 'auto';
		stats.dom.style.bottom = 'auto'
		mountRef.current.appendChild(stats.dom);

		const handleResize = () => {
			camera.aspect = mountRef.current!.clientWidth / mountRef.current!.clientHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(mountRef.current!.clientWidth, mountRef.current!.clientHeight);
		};
		window.addEventListener('resize', handleResize);

		fetch(`${API_URL}/graph`)
			.then(response => {
				return response.json();
			})
			.then((data: Graph) => {
				// by default, the graph data sent over is unscaled and an array of 3 numbers
				// as soon as data is received, scale the positions and store it as a three.vector3 so i dont have to rescale it everywhere else
				// "as unknown as [n n n]" is to silence the type error thing because it comes in as [n n n] and i dont wanna change the graph type to have [n n n] because it messes up stuff elsewhere
				data.nodes.forEach((node: Vertex) => {
					node.position = new THREE.Vector3(...(node.position as unknown as [number, number, number]).map(c => c * VisualizerUtils.posScale));
					VisualizerUtils.nodeIDtoPosition[node.id] = node.position;
				});

				// set graph data, visualize nodes
				graphDataRef.current = data;
				nodeMesh = VisualizerUtils.GenerateGraphNodes(data);
				scene.add(nodeMesh);

				// set & visualize edges
				const edges = VisualizerUtils.GenerateGraphEdges(data, camera);
				visibleEdgesRef.current = edges ?? null;
				allEdgesRef.current = edges ?? null;

				if (visibleEdgesRef.current) scene.add(visibleEdgesRef.current);
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

			if (nodeMesh && nodeMesh?.material instanceof THREE.ShaderMaterial) {
				// top right corner of the screen in world space
				const topRight = new THREE.Vector3(1, 1, 0.0).unproject(camera);
				nodeMesh.material.uniforms.topRight.value.copy(topRight);
			}

			if (cursorIsOverCanvas) {
				// raycast
				raycaster.setFromCamera(pointer, camera);
				const intersections = raycaster.intersectObjects(scene.children);
				const sphereIntersection = intersections.find((intersection: THREE.Intersection) => intersection.object instanceof THREE.InstancedMesh);

				// if mouse is hovering over a node
				if (sphereIntersection) {
					// get the vertex under the cursor
					const clickedNode: Vertex = graphDataRef.current!.nodes[sphereIntersection.instanceId!];
					selectedVertexRef.current = clickedNode;
					setSelectedVertex(clickedNode);

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

					if (visibleEdgesRef.current) {
						scene.remove(visibleEdgesRef.current);
						visibleEdgesRef.current = allEdgesRef.current!;
						scene.add(visibleEdgesRef.current);
					}
				}
			}

			renderer.render(scene, camera);
			stats.end();
			animationIdRef.current = requestAnimationFrame(RenderAllShapes);
		};

		// can only hide the scrollbar on this page by setting the body to have overflow: hidden
		// but that affects it globally and prevents scrolling on all other pages too
		// add this no-scroll property when the page is loaded, and remove it when it is unloaded
		// document.body.classList.add("no-scroll");

		// const fontLoader = new FontLoader();
		// fontLoader.load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json", function (f: Font) {
		RenderAllShapes();
		// })


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
			<div className='pageContainer'>
				<Navigation />
				<div
					ref={mountRef}
					className='canvas'
				>
					{selectedVertex && (
						<div className='panel selectionInfo'>
							<h3>{selectedVertex.name}</h3>
							{shiftKey && graphDataRef.current &&
								<p>
									{VisualizerUtils.PrintHopsFromFortnite(graphDataRef.current.paths[selectedVertex.id].length, selectedVertex.name)}
								</p>
							}
						</div>
					)}

					<div className='panel controlInfo'>
						<GraphInfo />
					</div>
				</div>
			</div>
		</>
	);
};