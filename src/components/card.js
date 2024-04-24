import React from "react";
import Star from "../images/star.png";

function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card-image" alt="katie zaferes in swim suit"/>
            <div className="card-stats">
                <img src={Star} className="card-star" alt="star symbol"/>
                <span>{props.rating}</span>
                <span className="gray">({props.ratingCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.text}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    );
}

export default Card;