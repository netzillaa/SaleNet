import React from "react"
import '../css/Card.css';

export default function Card(ball) {
    let badgeText
    if (ball.available === 0) {
        badgeText = "SOLD OUT"
    }
    
    return (
        <div className="card">
            {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }
            <img 
                src={`images/${ball.coverImg}`} 
                className="card--image" 
            />
            <div className="card--stats">
                <span>{ball.stats.rating}</span>
                <span className="gray">({ball.stats.reviewCount}) • </span>
                <span className="gray">{ball.location}</span>
            </div>
            <p className="card--title">{ball.title}</p>
            <p className="card--price">
                <span className="bold">From ${ball.price}</span> / person
            </p>
        </div>
    )
}