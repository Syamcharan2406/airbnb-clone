import React from "react";
import Star from "../images/star.png";

function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.img}`} className="card-image" alt="katie zaferes in swim suit"/>
            <div className="card-stats">
                <img src={Star} className="card-star" alt="star symbol"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <h3>{props.title}</h3>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    );
}

export default Card;