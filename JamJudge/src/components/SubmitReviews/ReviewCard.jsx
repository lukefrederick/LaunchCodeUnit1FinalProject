import { useState } from 'react';
import submittedReviewContent from '../SeeReviewPage/SubmittedReviewContent';

function ReviewCard() {
    const [album, setAlbum] = useState('');
    const [artist, setArtist] = useState('');
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');

    
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!album || !artist || !rating || !review) {
            return;
        }

        let newReview = {
            albumName: album,
            artistName: artist,
            rating: rating,
            reviewContent: review
        };

        submittedReviewContent.push(newReview);

        setAlbum('');
        setArtist('');
        setRating('');
        setReview('');
    };

    return (
        <div id="reviewBox">
            <h2>Write a review</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="album">Album Title:</label>
                <br/>
                <input type="text" id="album" name="album" value={album} onChange={(event) => setAlbum(event.target.value)} required/>
                <br />
                <label htmlFor="artist">Artist Name:</label>
                <br/>
                <input type="text" id="artist" name="artist" value={artist} onChange={(event) => setArtist(event.target.value)} required/>
                <br />
                <label htmlFor="rating">Rating (1-10):</label>
                <br/>
                <select id="rating" name="rating" value={rating} onChange={(event) => setRating(event.target.value)}required>
                    <option value="">Select a rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <br />
                <label htmlFor="review">Review:</label>
                <br/>
                <textarea id="review" name="review" rows="4" value={review} onChange={(event) => setReview(event.target.value)} required/>
                <br />
                <button type="submit">Submit Review</button>
            </form>
        </div>
    )
}


export default ReviewCard;