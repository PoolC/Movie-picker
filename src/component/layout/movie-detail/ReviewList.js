import React from 'react'
import { StyledReview, MovieTitle, Reviews } from './movie-detail.style'
import ReviewItem from './ReviewItem.js'

const ReviewList = () => {
    return (
        <StyledReview>
            <MovieTitle>
                CRUELLA
            </MovieTitle>
            <Reviews>
                <ReviewItem />
            </Reviews>
        </StyledReview>
    )
}

export default ReviewList
