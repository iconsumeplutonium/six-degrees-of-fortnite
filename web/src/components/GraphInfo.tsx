import { useState } from 'react';
import './../styles/GraphInfo.css';

export default function GraphInfo() {
	const [isOpen, setOpen] = useState<boolean>(true);

	return (isOpen) ? (
		<div style={{display: "flex", flexDirection: "row"}}>
			<div>
				This 3D graph visualizes the shortest paths from every franchise back to Fortnite.
				Note that this visualization works better on with keyboard and mouse than on a touch display.
				<br />
				<br />


				<h4 style={{ margin: "0px" }}>Controls</h4>
				<p style={{ margin: "0px" }}>Left click + drag to pan</p>
				<p style={{ margin: "0px" }}>Scrollwheel to zoom</p>
				<p style={{ margin: "0px" }}>Mouse over node to view franchise name</p>
				<p style={{ margin: "0px" }}>Hold shift + mouse over node to view path to Fortnite</p>
			</div>
			<div>
				<button onClick={() => {setOpen(false)}} className='closeButton'>
					<img src="/white_x.svg" style={{width: '10px', height: '10px'}} alt="Close"></img>
				</button>
			</div>
		</div>
	) : (
		<button onClick={() => {setOpen(true)}} className='helpButton'>
			<img src='/q3.svg' style={{width: '15px', height: '15px', display: 'block'}}></img>
		</button>
	)
}