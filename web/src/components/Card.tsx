import React from "react"
import '../styles/Card.css'

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
                    <h3 className="franchiseName">{title}</h3>
                    <p className="crossoverDate">{date}</p>
                </div>
                
                <hr className="dividerBar" />

                <div style={{textAlign: 'left'}}>
                    <p className="description">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;