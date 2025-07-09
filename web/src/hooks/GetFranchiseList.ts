import { useEffect, useState } from "react";
import { franchiseList } from "../assets/filtered_franchises";

const getRandomFranchise = () => { return franchiseList[Math.floor(Math.random() * franchiseList.length)] };

export function GetFranchises() {
    const [randomFranchise, setRandomFranchise] = useState<string>(getRandomFranchise());

    // every 2000ms, pick a random franchise for the Autocomplete suggestions
    useEffect(() => {
        const timer = setInterval(() => {
            setRandomFranchise(getRandomFranchise());
        }, 2000);

        return () => clearInterval(timer);
    }, [franchiseList]);


    return [
        franchiseList,
        new Set(franchiseList),
        randomFranchise
    ] as const;
}