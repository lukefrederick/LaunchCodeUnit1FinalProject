import SubmittedReviewCard from "./SubmittedReviewCard"
import submittedReviewContent from "./SubmittedReviewContent"

function ReviewPage() {
    return (
        <div id="ReviewPage">
            <h1>Album Reviews</h1>

            {submittedReviewContent.map((album) => (
                <SubmittedReviewCard
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