// THis is where state should be... -> state changes on submit

function ReviewCard() {
    return (
        <div id="reviewBox">
            <h2>Write a review</h2>
            <form>
                <label for="album">Album Title:</label>
                <input type="text" id="album" name="album" required></input>
                <br />
                <label for="artist">Artist Name:</label>
                <input type="text" id="artist" name="artist" required></input>
                <br />
                <label for="rating">Rating (1-10):</label>
                <select id="rating" name="rating" required>
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
                <label for="review">Review:</label>
                <textarea id="review" name="review" rows="4"></textarea>
                <br />
                <button type="submit">Submit Review</button>
            </form>


        </div>
    )
}


export default ReviewCard;