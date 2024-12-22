import { useState, useMemo } from 'react';
import './App.css';

function App() {
	const [inputQuery, setInput] = useState('');
	const [selectedFranchise, setSelectedFranchise] = useState('')
	const a = ['Fortnite', 'Apex Legends', 'Mirror\'s edge', 'Minecraft', 'Call of Duty', 'Overwatch', 'League of Legends', 'Valorant', 'Rainbow Six Siege', 'GTA V', 'Cyberpunk 2077', 'Red Dead Redemption 2', 'The Witcher 3', 'Assassin\'s Creed', 'God of War', 'The Last of Us', 'Uncharted'];
	const aSet = useMemo(() => new Set(a), []);


	const filterFranchises = () => {
		return Array.from(a)
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
		<div>
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
		</div>
	)
}

export default App;
