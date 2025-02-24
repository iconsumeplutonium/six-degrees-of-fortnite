import { useState, useMemo, useEffect } from 'react';
import Card from './components/Card';
import Autocomplete from './components/Autocomplete';
import Timeline from './components/Timeline';
import Navigation from './components/Navigation';
import './styles/App.css';

function App() {
	const [selectedFranchise, setSelectedFranchise] = useState('')
	const [franchiseList, setFranchiseList] = useState<string[]>([]);
	const [crossoverDict, setCrossoverDict] = useState<Record<string, unknown>>({});

	//load list of all franchises into memory on page load
	const franchiseSet = useMemo(() => new Set(franchiseList), [franchiseList]);
	useEffect(() => {
		const readFileIntoArray = async () => {
			try {
				const response = await fetch('/filtered_franchises.txt');
				if (!response.ok) throw new Error('Failed to load franchises');

				const text = await response.text();
				const lines = text.split('\n').map(line => line.trim());
				setFranchiseList(lines);
			} catch (error) {
				console.error('Error reading file:', error);
			}
		};
		readFileIntoArray();
	}, []);


	const getCrossover = async () => {
		if (!selectedFranchise) return;

		try {
			const response = await fetch(`http://localhost:8000/path/${encodeURIComponent(selectedFranchise)}?minLinkType=1`, { method: 'POST' });
			if (!response.ok) throw new Error('Error: Something went wrong accessing API');

			const data = await response.json();

			setCrossoverDict(data);
		} catch (error) {
			console.error('Error:', error);
		}
	}


	//call getcrossover whenever selectedFranchise is updated (when Autocomplete calls onFranchiseSelect)
	useEffect(() => {
		if (selectedFranchise.length > 0) getCrossover();
	}, [selectedFranchise]);


	const formatData = () => {
		if (!selectedFranchise) return;
		if (!crossoverDict.found) return `No connection found. ${selectedFranchise} isn't part of the Fortnite multiverse.`;

		// return [
		// 	<Card
		// 		key="start"
		// 		title={selectedFranchise}
		// 		date=""
		// 		description="Starting point"
		// 	/>,
		// 	...(crossoverDict.path as any).map((crossover: Record<string, unknown>, index: number) => (
		// 		<Card
		// 			key={index}
		// 			title={crossover.name as string}
		// 			date={crossover.date as string}
		// 			description={crossover.description as string}
		// 		/>
		// 	))
		// ];

		return [
			<Timeline
				key={0}
				franchiseName={selectedFranchise}
				date=""
				description=""
				displayArrow={false}
			/>,
			...(crossoverDict.path as any).map((crossover: Record<string, unknown>, index: number) => (
				<Timeline
					key={index + 1}
					franchiseName={crossover.name as string}
					date={crossover.date as string}
					description={crossover.description as string}
					displayArrow={true}
				/>
			))

		];
	}


	return (
		<>
			<Navigation />
			<div>
				<h1>Six Degrees of Fortnite</h1>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<label className="connectText">
						{"Connect "}
					</label>
					<Autocomplete
						data={franchiseList}
						onFranchiseInput={(f: string) => {
							if (!franchiseSet.has(f)) return;

							// getCrossover is called automatically whenever setSelectedFranchise is called
							setSelectedFranchise(_ => {
								console.log(f);
								return f;
							});
						}}
					/>

					<label className='connectText'>
						{" to Fortnite"}
					</label>
				</div>
			</div>
			<button onClick={getCrossover} style={{marginTop: '10px'}}>
				<b>Go!</b>
			</button>
			<br /><br />
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				{formatData()}
				{/* <Timeline
					description='the pumping lemma says that for any regular language L, there exists a constant p such that any string w in L with length at least p can be split into three substrings x, y and z (w=xyz, with y being non-empty), such that the strings xz, xyz, xyyz, xyyyz,... are also in L.'
					date='February 28, 2004'
					franchiseName='insert franchise here'
				/> */}
			</div>
		</>
	)
}

export default App;
