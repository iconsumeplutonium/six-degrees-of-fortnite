import React from "react"
import './Card.css'

interface CardProps {
    title: string,
    date: string
    description: string
}

const Card: React.FC<CardProps> = ({ title, date, description }) => {
    return (
        <div className="cardContainer">
            <div className="card">
                <div className="title">
                    <h3 style={{ margin: '0px' }}>{title}</h3>
                    <p style={{ margin: '0px', fontSize: '15px' }}>{date}</p>
                </div>
                <hr style={{color: 'white'}} />
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card;