import React from 'react';
import { Link } from 'react-router-dom';
import guitarPicture from '../assets/closeup-black-electric-guitar-dark-background.jpg';

function Header() {
    return (
        <div class="header">
            <h1>Jam Judge</h1>
            {/* <img id="guitarPicture" src={guitarPicture} alt="Black Electric Guitar"/> */}

            <Link id="headerLink" to="/">Home</Link>
            <Link id="headerLink" to="/About">About</Link>
            <Link id="headerLink" to="/ReviewCard">Review</Link>
            <Link id="headerLink" to="/ChartPage">Charts</Link>
            <Link id="headerLink" to="/ReviewPage">Your Reviews</Link>
        </div>
    )
}

export default Header;