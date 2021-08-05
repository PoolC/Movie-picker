import React, { useState, useEffect } from 'react'

import { StyledReviewItem } from './movie-detail.style';

const ReviewItem = (props) => {
    const [review, setReview] = useState(props.review);

    // comments = [{}, {}, ...]
    // comments.commentContent, comments.commentNickname
    const [comments, setComments] = useState(props.review.reviews.comments);

    return (
        <StyledReviewItem>
            {review.reviews.reviewContent}
        </StyledReviewItem>
    )
}

export default ReviewItem
