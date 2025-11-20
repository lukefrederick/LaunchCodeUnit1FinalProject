 import Header from './Header.jsx'
import Footer from './Footer.jsx'
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div class="home">
            <h2>Welcome to JamJudge!</h2>
            <p id="home-paragraph">Welcome to JamJudge! Here you can pick out your favorite (or least favorite) music and 
                submit your rating through our points system. You can provide a review in your own words
                and connect with other music fanatics about your thoughts about all music, new and old.
                Start Jamming today!
            </p>
            <b/>
            <Link id="headerLink" to="/ReviewCard">Write a Review</Link>
            <b/>
            <p>
            Write a review for the last album you listened to.
            </p>
            <b/>
            <h3>Read your reviews</h3>
            <b/>
            <p>
            Read the reviews that you've already submitted.
            </p>
            <b/>
            <h3>Music Charts</h3>
            <b/>
            <p>
            Check out what others have been enjoying.
            </p>

        </div>
    )
}

export default Home;