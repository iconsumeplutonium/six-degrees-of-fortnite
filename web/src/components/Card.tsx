import '../styles/Card.css';

interface CardProps {
	date: string,
	description: string,
	franchiseName: string,
	displayArrow: boolean // whether or not the arrow should show (false if this is the starting point, true otherwise)
}

export default function Card({ date, description, franchiseName, displayArrow }: CardProps) {
	//remove margin if no arrow is to be displayed
	const margin = (displayArrow) ? { marginTop: '30px' } : {};

	return (
		<div className="timelineCardParent" style={margin}>

			{/* the arrow */}
			{displayArrow &&
				<div style={{ position: 'relative' }}>
					<div className="arrowLine"></div>
					<div className="arrowHead"></div>
				</div>
			}


			{/* the card itself */}
			<div className="cardParent">
				<a href={`https://fictionalcrossover.fandom.com/wiki/${encodeURIComponent(franchiseName)}`} style={{color: 'white'}} target="_blank">
					<h3 className='title'>{franchiseName}</h3>
				</a>

				{/* only display the crossover date and description if this isnt the starting point (without this, there'll be extra padding under the title) */}
				{displayArrow &&
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
						<p className='crossoverDate'>{date}</p>
						<hr className="dividerBar" />
						<p className='description'>{description}</p>
					</div>
				}

			</div>
		</div>
	);
}