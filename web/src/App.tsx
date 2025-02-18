import { useState, useMemo, useEffect } from 'react';
import Card from './components/Card';
import Autocomplete from './components/Autocomplete';
import './App.css';

function App() {
	const [inputQuery, setInput] = useState('');
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

				console.log(lines);
			} catch (error) {
				console.error('Error reading file:', error);
			}
		};
		readFileIntoArray();
	}, []);

	const getCrossover = async () => {
		console.log(selectedFranchise);
		try {
			const response = await fetch(`http://192.168.189.162:8000/path/${encodeURIComponent(selectedFranchise)}?minLinkType=1`, { method: 'POST' });
			if (!response.ok) throw new Error('Error: Something went wrong accessing API');

			const data = await response.json();

			setCrossoverDict(data);
		} catch (error) {
			console.error('Error:', error);
		}
	}

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
					{/* <input
						className="inputBox"
						type="text"
						list="franchise"
						value={inputQuery}
						onChange={(e) => { setInput(e.target.value) }}
						onKeyDown={(e) => {
							if (e.key === 'Enter' && franchiseSet.has(inputQuery))
								setSelectedFranchise(inputQuery);
						}}
						onInput={(e) => {
							const test = e.target as HTMLInputElement;
							if (franchiseSet.has(test.value))
								setSelectedFranchise(test.value);
						}}
						placeholder="Search..."
					/>
					<datalist id="franchise">
						{inputQuery && filterFranchises()}
					</datalist> */}
					<Autocomplete 
						data={franchiseList}
						currentValue={inputQuery}
						onChange={setInput}
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
