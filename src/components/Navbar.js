import React from 'react';
import logo from './pictures/airbnb-logo.png';

function Navbar(){
    return (
        <div className='nav'>
            <img className='nav-logo' src= {logo} alt='Airbnb logo'/>
        </div>
    );
}

export default Navbar;