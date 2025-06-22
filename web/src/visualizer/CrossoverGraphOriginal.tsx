// import { useEffect, useState, useRef } from 'react';
// import Navigation from './components/Navigation';
// import ForceGraph3D from 'react-force-graph-3d';
// import * as THREE from 'three';


// export default function CrossoverGraph() {
//     const [graphData, setGraphData] = useState({ nodes: [], links: [] })
//     const fgRef = useRef();

//     useEffect(() => {
//         fetch('http://127.0.0.1:8000/graph')
//             .then(response => {
//                 return response.json();
//             })
//             .then(data => {
//                 console.log(data)
//                 setGraphData(data);
//             });
        
//         console.log(graphData)
//     }, []);


//     // Initial toy data for the graph
//     const initialGraphData = {
//         "nodes": [
//             { "id": "fortnite", "name": "Fortnite", "val": 20 },
//             { "id": "minecraft", "name": "Minecraft", "val": 15 },
//             { "id": "roblox", "name": "Roblox", "val": 12 },
//             { "id": "among_us", "name": "Among Us", "val": 8 },
//             { "id": "fall_guys", "name": "Fall Guys", "val": 10 }
//         ],
//         "links": [
//             { "source": "fortnite", "target": "minecraft" },
//             { "source": "fortnite", "target": "roblox" },
//             { "source": "minecraft", "target": "among_us" },
//             { "source": "roblox", "target": "fall_guys" },
//             { "source": "among_us", "target": "fall_guys" }
//         ]
//     };

//     return (
//         <>
//             <Navigation />
//             <div className='container'>
//                 <ForceGraph3D
//                     graphData={graphData}
//                     // ref={fgRef}
//                     // graphData={graphData}
//                     // // Performance optimizations
//                     nodeResolution={1}
//                     forceEngine={'ngraph'}
//                     // nodeOpacity={1}
//                     // linkOpacity={0.2}
//                     // linkWidth={0.1}
//                     // // Reduce physics iterations for better performance
//                     // cooldownTicks={100}
//                     // warmupTicks={50}
//                     // // Level of detail optimizations
//                     // nodeRelSize={2}
//                     // linkDirectionalArrowLength={0}
//                     // linkDirectionalArrowRelPos={0}
//                     // linkResolution={1}
//                     // // Disable expensive features
//                     showNavInfo={false}
//                     enableNodeDrag={false}
//                     // // Optimize camera controls
//                     // controlType="orbit"
//                     rendererConfig={{
//                         antialias: false,
//                         alpha: true,
//                         powerPreference: "high-performance"
//                     }}
//                 />
//             </div>
//         </>
//     )
// }