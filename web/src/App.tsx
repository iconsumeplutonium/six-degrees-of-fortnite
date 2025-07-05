import { useState, useEffect } from 'react';
import Autocomplete from './components/Autocomplete';
import Timeline from './components/Timeline';
import Navigation from './components/Navigation';
import { Path } from './types';
import './styles/App.css';
import { getFranchises } from './hooks/GetFranchises';

export default function App() {
	const [selectedFranchise, setSelectedFranchise] = useState('')
	const [crossoverDict, setCrossoverDict] = useState<Path>({ found: false, path: [] });
	const { franchiseList, franchiseSet } = getFranchises();

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