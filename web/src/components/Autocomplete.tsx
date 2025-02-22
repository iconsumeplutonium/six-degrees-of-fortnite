import { useState } from "react"
import '../styles/Autocomplete.css'

const MAX_RESULTS = 10;

interface AutocompleteProps {
	data: string[],                                     //the list of franchises
	onFranchiseInput: (franchiseName: string) => void   //the function to call once a franchise was inputted
}

function filterFranchises(franchiseList: string[], inputQuery: string) {
	if (!inputQuery) return [];

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
					//deselect textbox if textbox is deselected (https://c.tenor.com/KsvZ1G5XL1UAAAAC/tenor.gif)
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
							setCurrentValue(suggestions[selectedIndex]);
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
								ref={(el) => {
									//scroll into view if selection is off-screen
									if (el && index === selectedIndex) {
										el.scrollIntoView({ block: 'nearest' });
									}
								}}
								onMouseDown={(_) => {
									setCurrentValue(option);
									setIsFocus(false);
									onFranchiseInput(option);
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