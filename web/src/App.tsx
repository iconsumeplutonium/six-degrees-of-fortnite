import { useState, useMemo, useEffect } from 'react';
import './App.css';

function App() {
	const [inputQuery, setInput] = useState('');
	const [selectedFranchise, setSelectedFranchise] = useState('')
	const [franchiseList, setFranchiseList] = useState<string[]>([]);

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
			.map((option: string, index: number) => {
				return (<option key={index} value={option} />)
			})
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
				onClick={() => { console.log(selectedFranchise) }}
			>
				Go!
			</button>
		</>
	)
}

export default App;
