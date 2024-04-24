import React from "react";
import HeroImg from '../images/photo-grid.png';

function Hero(){
    return(
        <div className="hero">
            <img className="hero-img" src={HeroImg} alt="a  grid" />
            <h1 className="hero-header">Online Experince</h1>
            <p className="hero-text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </div>
    );
}

export default Hero;