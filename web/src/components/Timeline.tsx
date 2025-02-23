import '../styles/Timeline.css';

interface TimelineProps {
	date: string,
	description: string,
	franchiseName: string,
	displayArrow: boolean // whether or not the arrow should show (false if this is the starting point, true otherwise)
}

const Timeline: React.FC<TimelineProps> = ({ date, description, franchiseName, displayArrow }) => {
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
				<h3 className='title'>{franchiseName}</h3>

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

export default Timeline;