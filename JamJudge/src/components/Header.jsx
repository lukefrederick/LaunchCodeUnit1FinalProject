import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div id="header">
            <h1>Jam Judge</h1>
            <Link to="/">Home</Link>
            <Link to="/ReviewCard">Review</Link>
        </div>
    )
}

export default Header;