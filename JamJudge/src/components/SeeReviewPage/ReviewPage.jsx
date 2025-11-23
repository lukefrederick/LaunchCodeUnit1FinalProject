import SubmittedReviewCard from "./SubmittedReviewCard"
import submittedReviewContent from "./SubmittedReviewContent"
import { useState } from 'react';

// add functionality to sort by higRehest or lowest rating... and use states here - this will be conditional rendering
function ReviewPage() {

    const [sort, setSort] = useState('descending');

    const sortedReviewContent = [...submittedReviewContent].sort((a, b) => {
        return sort === 'ascending' ? a.rating - b.rating : b.rating - a.rating;
    })

    return (
        <div id="ReviewPage">
            <h1>Album Reviews</h1>

            <button onClick={() => setSort(sort === 'ascending' ? 'descending' : 'ascending')}>{sort}</button>

            {sortedReviewContent.map((album) => (
                <SubmittedReviewCard
                    key={album.albumName}
                    albumName={album.albumName}
                    artistName={album.artistName}
                    rating={album.rating}
                    reviewContent={album.reviewContent}
                />
                
            ))}
        </div>
    )
}

export default ReviewPage