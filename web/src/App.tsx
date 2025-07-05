import { useState, useMemo, useEffect } from 'react';
import Autocomplete from './components/Autocomplete';
import Timeline from './components/Timeline';
import Navigation from './components/Navigation';
import { Path } from './types';
import './styles/App.css';

export default function App() {
	const [selectedFranchise, setSelectedFranchise] = useState('')
	const [franchiseList, setFranchiseList] = useState<string[]>([]);
	const [crossoverDict, setCrossoverDict] = useState<Path>({ found: false, path: [] });

	//load list of all franchises into memory on page load
	const franchiseSet = useMemo(() => new Set(franchiseList), [franchiseList]);
	useEffect(() => {
		const readFileIntoArray = async () => {
			const response = await fetch('/filtered_franchises.txt');
			if (!response.ok) throw new Error('Failed to load franchises');

			const text = await response.text();
			const lines = text.split('\n').map(line => line.trim());
			setFranchiseList(lines);
		};
		readFileIntoArray();
	}, []);


	const GetCrossover = async () => {
		if (!selectedFranchise) return;

		const response = await fetch(`http://192.168.189.162:8000/path/${encodeURIComponent(selectedFranchise)}?minLinkType=1`, { method: 'POST' });
		if (!response.ok) throw new Error('Error: Something went wrong accessing API');

		const data = await response.json();
		setCrossoverDict(data);
	}


	//call getcrossover whenever selectedFranchise is updated (when Autocomplete calls onFranchiseSelect)
	useEffect(() => {
		if (selectedFranchise) GetCrossover();
	}, [selectedFranchise]);


	return (
		<>
			<div className="mainPageLayout">
				<Navigation />
				<h1 style={{ marginTop: '8vh' }}>Six Degrees of Fortnite</h1>
				<div className='searchContainer'>
					<label className="connectText">
						{"Connect "}
					</label>
					<Autocomplete
						data={franchiseList}
						onFranchiseInput={(f: string) => {
							if (!franchiseSet.has(f)) return;

							// getCrossover is called automatically whenever setSelectedFranchise is called
							setSelectedFranchise(f);
						}}
					/>

					<label className='connectText'>
						{" to Fortnite"}
					</label>
				</div>
			</div>
			<button onClick={GetCrossover} style={{ marginTop: '10px' }}>
				<b style={{ color: 'black' }}>Go!</b>
			</button>
			<br /><br />
			<Timeline
				selectedFranchise={selectedFranchise}
				crossoverData={crossoverDict}
			/>
		</>
	)
}