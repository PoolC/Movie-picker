import React, { useState, useEffect } from 'react'
import { reviewModalAtom } from '@recoil/movie-detail/movieDetail';

import { StyledReviewItem } from './movie-detail.style';
import { useSetRecoilState } from 'recoil';

const ReviewItem = (props) => {
    const [review, setReview] = useState(props.review);
    const setReviewModal = useSetRecoilState(reviewModalAtom);

    // comments = [{}, {}, ...]
    // comments.commentContent, comments.commentNickname
    const [comments, setComments] = useState(props.review.reviews.comments);

    const openReviewModal = () => {
        setReviewModal(true);
    }

    return (
        <StyledReviewItem onClick={openReviewModal} >
            {review.reviews.reviewContent}
        </StyledReviewItem>
    )
}

export default ReviewItem
