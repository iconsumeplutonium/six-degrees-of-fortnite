import { useState } from "react"
import './Autocomplete.css'

const MAX_RESULTS = 10;

interface AutocompleteProps {
	data: string[],            //the list of franchises
	onFranchiseInput: (franchiseName: string) => void
}

function filterFranchises(franchiseList: string[], inputQuery: string) {
	// if (franchiseList.length == 0) (<div></div>);
	if (!inputQuery || inputQuery.length == 0) return [];

	let regexSearch;
	try {
		regexSearch = new RegExp(`^${inputQuery}`, "i");
	} catch (error) {
		//if the regex fails (e.g a \ at the end of inputQuery), dont bother trying to match
		return [];
	}

	return Array.from(franchiseList)
		.filter((option: string) => {
			return regexSearch.test(option);
		})
		.slice(0, MAX_RESULTS);
}

const Autocomplete: React.FC<AutocompleteProps> = ({ data, onFranchiseInput }) => {
	const [currentValue, setCurrentValue] = useState<string>('');
	const [isFocus, setIsFocus] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [suggestions, setSuggestions] = useState<string[]>([]);

	return (
		<div className="autocompleteParent" style={{position: 'relative'}}>
			<input
				className="inputBox"
				type="text"
				list="franchise"
				value={currentValue}
				onChange={(e) => {
					const a = e.target.value;
					setCurrentValue(a);
					setSelectedIndex(0);
					setSuggestions(filterFranchises(data, a));
				}}
				ref={(input) => {
					if (!isFocus && input) {
						input.blur();
					}
				}}
				onFocus={() => (setIsFocus(true))}
				onBlur={() => (setIsFocus(false))}
				onKeyDown={(e) => {
					switch (e.key) {
						case 'ArrowUp':
							setSelectedIndex(prevIndex => {
								const newIndex = Math.max(prevIndex - 1, 0);
								setSuggestions(filterFranchises(data, currentValue));
								return newIndex;
							})
							break;
						case 'ArrowDown':
							setSelectedIndex(prevIndex => {
								const newIndex = Math.min(prevIndex + 1, suggestions.length - 1);
								setSuggestions(filterFranchises(data, currentValue));
								return newIndex;
							});
							break;
						case 'Enter':
							if (selectedIndex < 0) break;
							console.log(suggestions[selectedIndex]);
							setCurrentValue(suggestions[selectedIndex]);
							setIsFocus(false);

							onFranchiseInput(suggestions[selectedIndex]);
							break;
					}
				}}
				placeholder="Search..."
			/>

			{isFocus && (currentValue.length > 0) &&
				<div className="resultsList" style={{ position: 'absolute', zIndex: 1000, top: '100%' }}>
					{suggestions.map((option: string, index: number) => {
						return (
							<div
								key={option}
								className="option"
								onMouseDown={(e) => {
									setCurrentValue(option);
									setIsFocus(false);
									onFranchiseInput(option);

									console.log(option);
								}}
								style={{
									...(index === selectedIndex && { backgroundColor: "#0000FF" }),
								}}
							>
								{option}
							</div>)
					})}
				</div>
			}
		</div>
	);
}

export default Autocomplete;