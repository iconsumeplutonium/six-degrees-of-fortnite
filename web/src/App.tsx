import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import Autocomplete from './components/Autocomplete';
import Timeline from './components/Timeline';
import Navigation from './components/Navigation';
import Attribution from './components/Attribution';
import { GetFranchises } from './hooks/GetFranchiseList';
import CrossoverHooks from './hooks/GetCrossovers';
import Logo from './assets/6dof_logo.png';
import './styles/App.css';

export default function App() {
	const [selectedFranchise, setSelectedFranchise] = useState('');
	const [franchiseList, franchiseSet, randomFranchiseSuggestion] = GetFranchises();
	const [crossoverData, isLoading, wasAPIError, GetCrossover] = CrossoverHooks();
	const [currentValue, setCurrentValue] = useState<string>(''); //the current value inputted in the textbox

	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const [prefill, setPrefill] = useState<string>("");

	//if navigating from direct URL, prefill the box with the franchise name, and mark it as selected so the crossover api can be called
	useEffect(() => {
		const sourceFromURL = searchParams.get('source');
		if (sourceFromURL && franchiseSet.has(sourceFromURL)) {
			setSelectedFranchise(sourceFromURL);
			setPrefill(sourceFromURL);
		}
	}, [searchParams, franchiseSet]);


	//Autocomplete calls onFranchiseSelect -> selectedFranchise is updated -> GetCrossver gets called
	useEffect(() => {
		GetCrossover(selectedFranchise);
	}, [selectedFranchise]);


	const onGoPress = () => {
		// if the Go button is pressed when nothing is filled, just use the random suggestion
		if (!currentValue) {
			setSelectedFranchise(randomFranchiseSuggestion);
			setPrefill(randomFranchiseSuggestion);
			navigate(`?source=${encodeURIComponent(randomFranchiseSuggestion)}`)
		}

		GetCrossover(selectedFranchise);
	}

	return (
		<div style={{
			minHeight: '100vh',
			display: 'flex',   /* this stuff and the flex:1 stuff makes it so that the attribution sticks to the bottom of the page if theres overflow, and to the bottom of the viewport if no overflow */
			flexDirection: 'column'
		}}>
			<div style={{ flex: '1' }}>
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
							placeholder={randomFranchiseSuggestion}
							currentValue={currentValue}
							setCurrentValue={setCurrentValue}
						/>

						<label className='connectText'>
							{" to Fortnite"}
						</label>
					</div>
				</div>
				<button onClick={onGoPress} style={{ marginTop: '10px' }} className='goButton'>
					<b style={{ color: 'black' }}>Go!</b>
				</button>
				<br /><br />
				{
					isLoading ? "Loading..." :
						<Timeline
							selectedFranchise={selectedFranchise}
							crossoverData={crossoverData}
							wasAPIError={wasAPIError}
						/>
				}
			</div>

			<Attribution />
		</div>
	)
}