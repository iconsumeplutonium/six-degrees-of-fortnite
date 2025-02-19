import { useState, useMemo, useEffect } from 'react';
import Card from './components/Card';
import Autocomplete from './components/Autocomplete';
import './App.css';

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
		try {
			const response = await fetch(`http://10.0.0.89:8000/path/${encodeURIComponent(selectedFranchise)}?minLinkType=1`, { method: 'POST' });
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
		if (!crossoverDict.found) return `No connection found. ${selectedFranchise} isn't part of the Fortnite multiverse.`;

		return (crossoverDict.path as any).map((crossover: Record<string, unknown>, index: number) => (
			<Card
				key={index}
				title={crossover.name as string}
				date={crossover.date as string}
				description={crossover.description as string}
			/>
		));
	}


	return (
		<>
			<div>
				<h1>Six Degrees of Fortnite</h1>
				<div>
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
			<br />
			<button
				onClick={getCrossover}
			>
				Go!
			</button>
			<br /><br />
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				{formatData()}
			</div>
		</>
	)
}

export default App;
