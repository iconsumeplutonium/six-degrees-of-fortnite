import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import Autocomplete from './components/Autocomplete';
import Timeline from './components/Timeline';
import Navigation from './components/Navigation';
import { Path } from './types';
import { getFranchises } from './hooks/GetFranchises';
import { API_URL } from './constants';
import  Logo from './assets/6dof_logo.png';
import './styles/App.css';

export default function App() {
	const [selectedFranchise, setSelectedFranchise] = useState('')
	const [crossoverDict, setCrossoverDict] = useState<Path>({ found: false, path: [] });
	const [wasAPIError, setAPIError] = useState<boolean>(false);
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

		try {
			const response = await fetch(`${API_URL}/path/${encodeURIComponent(selectedFranchise)}`);
			if (!response.ok) throw new Error('Error: Something went wrong accessing API');

			const data = await response.json();
			setCrossoverDict(data);
			setAPIError(false);
		} catch (error) {
			setAPIError(true);
		}
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
					<img className='logo' src={Logo}></img>
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
				wasAPIError={wasAPIError}
			/>
		</>
	)
}