import { useState, useMemo, useEffect } from 'react';
import './App.css';

function App() {
	const [inputQuery, setInput] = useState('');
	const [_selectedFranchise, setSelectedFranchise] = useState('')
	const [franchiseList, setFranchiseList] = useState<string[]>([]);

	const aSet = useMemo(() => new Set(franchiseList), [franchiseList]);

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
		return Array.from(franchiseList)
			.filter((option: string) => {
				const regexSearch = new RegExp(`^${inputQuery}`, "i");
				return regexSearch.test(option);
			})
			.map((option: string, index: number) => {
				return (<option key={index} value={option} />)
			})
	}

	const validateSelection = (input: string) => {
		if (aSet.has(input)) {
			console.log("Selection:", input);
			setSelectedFranchise(input);
		}
	}

	return (
		<>
			<div>
				<h1>Six Degrees of Fortnite</h1>
				{"Connect "}
				<input
					type="text"
					list="franchise"
					value={inputQuery}
					onChange={(e) => { setInput(e.target.value) }}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							validateSelection(inputQuery)
						}
					}}
					onInput={(e) => {
						const test = e.target as HTMLInputElement;
						validateSelection(test.value);
					}}
					placeholder="Search..."
				/>
				<datalist id="franchise">
					{inputQuery && filterFranchises()}
				</datalist>
				{" to Fortnite"}
			</div>
			<br />			
			<button>
				Go!
			</button>
		</>
	)
}

export default App;
