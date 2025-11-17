// This will be the confirmation page after a review has been submitted...

function ReviewSubmissionConfirmation() {
// Need to add confirmation that another review was added to the list of reviews...
// MAYBE: Also add a card for the review that was submitted
    return(
        <>
        <h1>Review Submitted</h1>
        <Link to="/ReviewCard">Submit Another Review</Link>

        </>
    )
}

export default ReviewSubmissionConfirmation;