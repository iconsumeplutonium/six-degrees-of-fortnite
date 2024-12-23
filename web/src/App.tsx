import { useState, useMemo, useEffect } from 'react';
import './App.css';

const MAX_RESULTS = 10;

function App() {
	const [inputQuery, setInput] = useState('');
	const [selectedFranchise, setSelectedFranchise] = useState('')
	const [franchiseList, setFranchiseList] = useState<string[]>([]);
	const [crossoverDict, setCrossoverDict] = useState<Record<string, unknown>>({});

	const franchiseSet = useMemo(() => new Set(franchiseList), [franchiseList]);

	useEffect(() => {
		const readFileIntoArray = async () => {
			try {
				const response = await fetch('/franchises_filtered.txt');
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

	const filterFranchises = () => {
		let regexSearch;
		try {
			regexSearch = new RegExp(`^${inputQuery}`, "i");
		} catch (error) {
			//if the regex fails (e.g a \ at the end of inputQuery), dont bother trying to match
			return;
		}

		return Array.from(franchiseList)
			.filter((option: string) => {
			return regexSearch.test(option);
			})
			.slice(0, MAX_RESULTS)
			.map((option: string, index: number) => {
			return (<option key={index} value={option} />)
			})
	}

	const getCrossover = async () => {
		console.log(selectedFranchise);
		try {
			const response = await fetch(`http://localhost:8000/path/${encodeURIComponent(selectedFranchise)}?minLinkType=1`, {method: 'POST'});
			if (!response.ok) throw new Error('Error: Something went wrong accessing API');

			const data = await response.json();
			if (!data["found"]) throw new Error("Error: franchise doesn't exist");

			setCrossoverDict(data);
		} catch (error) {
			console.error('Error:', error);
		}
	}

	const formatData = () => {
		if (!crossoverDict.found) return "No connection found.";

		const path: any = crossoverDict.path;
		let displayString = `${selectedFranchise}\n\n`;

		path.forEach((crossover: Record<string, unknown>) => {
			displayString += `${crossover.name} (${crossover.date})\n${crossover.description}\n\n`;
		});

		return <div style={{ whiteSpace: 'pre-line' }}>{displayString}</div>;
	}


	return (
		<>
			<div>
				<h1>Six Degrees of Fortnite</h1>
				<div>
					<label className="connectText">
						{"Connect "}
					</label>
					<input
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
					</datalist>
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
			{formatData()}
		</>
	)
}

export default App;
