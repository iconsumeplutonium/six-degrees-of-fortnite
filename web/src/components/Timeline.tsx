import { Path, Crossover } from './../types';
import Card from './Card';

interface TimelineProps {
	selectedFranchise: string;
	crossoverData: Path;
}

export default function Timeline({ selectedFranchise, crossoverData }: TimelineProps) {
	if (!selectedFranchise) return;
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