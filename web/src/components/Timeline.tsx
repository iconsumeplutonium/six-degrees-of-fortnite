// failed timeline style path display 

interface TimelineProps {
    date: string,
    description: string,
    franchiseName: string,
}

const Timeline: React.FC<TimelineProps> = ({ date, description, franchiseName }) => {
    return (
        <div>

            <div
                className="whiteLineContainer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', left: '50%' }}
            >
                <style>
                    {`
                        .whiteLineContainer {
                            position: relative;
                        }
                        .whiteLineContainer::before {
                            content: "";
                            position: absolute;
                            left: 0;
                            width: 2px;
                            height: 100px;
                            background-color: white;
                        }
                    `}
                </style>
                <div
                    style={{
                        marginLeft: '20px',
                        textAlign: 'left',
                        justifyContent: 'center',
                        whiteSpace: 'normal',
                        wordWrap: 'break-word',
                        width: 'fit-content',
                        overflowWrap: 'break-word'
                    }}
                >
                    <div>{date}</div>
                    <div>{description}</div>
                </div>
            </div>
            <br />
            {franchiseName}
        </div>
    );
}

export default Timeline;