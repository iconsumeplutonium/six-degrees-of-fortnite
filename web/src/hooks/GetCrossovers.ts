import { useState } from "react";
import { Path } from "../types";
import { API_URL } from "../constants";

export default function CrossoverHooks() {
	const [crossoverData, setCrossoverData] = useState<Path>({ found: false, path: [] });
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [wasAPIError, setAPIError] = useState<boolean>(false);

	const GetCrossover = async (selectedFranchise: string) => {
		if (!selectedFranchise) return;
		setIsLoading(true);

		try {
			const response = await fetch(`${API_URL}/path/${encodeURIComponent(selectedFranchise)}`);
			if (!response.ok) throw new Error('Error: Something went wrong accessing API');

			const data = await response.json();
			setCrossoverData(data);
			setAPIError(false);
		} catch (error) {
			setAPIError(true);
		}

		setIsLoading(false);
	}

	return [crossoverData, isLoading, wasAPIError, GetCrossover] as const;
}