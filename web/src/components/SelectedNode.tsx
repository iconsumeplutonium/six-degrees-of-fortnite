import { Vertex } from "../visualizer/VisualizerUtilities";

export default function SelectedNode({v}: {v: Vertex}) {


    return (
        <div>
            <p>{v.name}</p>
            <small>{v.value}</small>
        </div>
    )
}