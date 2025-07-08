import { useState, useEffect, useMemo } from "react";
import textFile from './../assets/filtered_franchises.txt';

// on page load, read the contents of filtered_franchises.txt and load it into
// a list (for use in the Autocomplete component's random suggestion thing) and
// a set (so that when the enter key is pressed/the Go button is clicked, we can check if the input is a valid franchise in O(1))
export function getFranchises() {
    const [franchiseList, setFranchiseList] = useState<string[]>([]);
    const franchiseSet = useMemo(() => new Set(franchiseList), [franchiseList]);

    useEffect(() => {
        const readFileIntoArray = async () => {
            const response = await fetch(textFile);
            if (!response.ok) throw new Error('Failed to load franchises');

            const text = await response.text();
            const lines = text.split('\n').map(line => line.trim());
            setFranchiseList(lines);
        };
        readFileIntoArray();
    }, []);

    return {franchiseList, franchiseSet}
}