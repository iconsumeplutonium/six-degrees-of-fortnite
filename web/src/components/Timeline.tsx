import { Path, Crossover } from './../types';
import Card from './Card';

interface TimelineProps {
	selectedFranchise: string;
	crossoverData: Path;
	wasAPIError: boolean;
}

export default function Timeline({ selectedFranchise, crossoverData, wasAPIError }: TimelineProps) {
	if (!selectedFranchise) return;
	if (wasAPIError) return "Something went wrong reaching the API. Please try again later.";

	if (selectedFranchise === 'Fortnite') return (
		<img src='https://c.tenor.com/PXbKt334CHcAAAAd/tenor.gif' style={{width: '30%', height: 'auto'}}></img>
	)

	if (!crossoverData.found) return `No connection found. ${selectedFranchise} isn't part of the Fortnite multiverse.`;

	return (
		<div style={{display: 'flex', flexDirection: 'column', marginBottom: '30px'}}>
			<Card
				key={0}
				franchiseName={selectedFranchise}
				date=""
				description=""
				displayArrow={false}
			/>
			{crossoverData.path.map((crossover: Crossover, index: number) => (
				<Card
					key={index + 1}
					franchiseName={crossover.name}
					date={crossover.date}
					description={crossover.description}
					displayArrow={true}
				/>
			))}
		</div>
	);
}