import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import Autocomplete from './components/Autocomplete';
import Timeline from './components/Timeline';
import Navigation from './components/Navigation';
import { Path } from './types';
import { getFranchises } from './hooks/GetFranchises';
import './styles/App.css';

export default function App() {
	const [selectedFranchise, setSelectedFranchise] = useState('')
	const [crossoverDict, setCrossoverDict] = useState<Path>({ found: false, path: [] });
	const { franchiseList, franchiseSet } = getFranchises();

	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const [prefill, setPrefill] = useState<string>("");


	useEffect(() => {
		const sourceFromURL = searchParams.get('source');
		if (sourceFromURL && franchiseSet.has(sourceFromURL)) {
			setSelectedFranchise(sourceFromURL);
			setPrefill(sourceFromURL);
		}
	}, [searchParams, franchiseSet]);

	const GetCrossover = async () => {
		if (!selectedFranchise) return;

		const response = await fetch(`http://192.168.189.162:8000/path/${encodeURIComponent(selectedFranchise)}`);
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
				<a href="/">
					<img className='logo' src="/6dof_logo.png"></img>
				</a>
				<div className='searchContainer'>
					<label className="connectText">
						{"Connect "}
					</label>
					<Autocomplete
						data={franchiseList}
						onFranchiseInput={(f: string) => {
							if (!franchiseSet.has(f)) return;

							navigate(`?source=${encodeURIComponent(f)}`)

							// getCrossover is called automatically whenever setSelectedFranchise is called
							setSelectedFranchise(f);
						}}
						prefill={prefill}
					/>

					<label className='connectText'>
						{" to Fortnite"}
					</label>
				</div>
			</div>
			<button onClick={GetCrossover} style={{ marginTop: '10px' }} className='goButton'>
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