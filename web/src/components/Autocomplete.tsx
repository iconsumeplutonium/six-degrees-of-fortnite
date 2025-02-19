import { useState } from "react"
import './Autocomplete.css'

const MAX_RESULTS = 10;

interface AutocompleteProps {
	data: string[],            //the list of franchises
	currentValue: string,      //the current text typed in the textbox (react state variable)
	onCurrentValueChange: (newValue: string) => void,      //the function that will change currentValue (react state function thing)
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

const Autocomplete: React.FC<AutocompleteProps> = ({ data, currentValue, onCurrentValueChange, onFranchiseInput }) => {
	const [isFocus, setIsFocus] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [suggestions, setSuggestions] = useState<string[]>([]);

	return (
		<div className="autocompleteParent">
			<input
				className="inputBox"
				type="text"
				list="franchise"
				value={currentValue}
				onChange={(e) => {
					const a = e.target.value;
					onCurrentValueChange(a);
					setSelectedIndex(0);
					setSuggestions(filterFranchises(data, a));
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
							onCurrentValueChange(suggestions[selectedIndex]);
							setIsFocus(false);

							onFranchiseInput(suggestions[selectedIndex]);
							break;
					}
				}}
				placeholder="Search..."
			/>

			{isFocus && (currentValue.length > 0) &&
				<div className="resultsList">
					{suggestions.map((option: string, index: number) => {
						return (
							<div
								key={option}
								className="option"
								onMouseDown={(e) => {
									e.preventDefault();
									console.log(option);
								}}
								style={index == selectedIndex ? { backgroundColor: "#0000FF" } : {}}
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