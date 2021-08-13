import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { reviewAtom } from '@recoil/movie-detail/movieDetail'

import { StyledReviewContainer, StyledMovieTitle, StyledReviewList } from './movie-detail.style'
import ReviewItem from './ReviewItem.js'


const ReviewList = () => {
    const reviews = useRecoilValue(reviewAtom);

    return (
        <StyledReviewContainer>
            <StyledMovieTitle>
                CRUELLA
            </StyledMovieTitle>
            <StyledReviewList>
                {reviews.map(review =>
                    <React.Fragment key={review.reviews.id}>
                        <ReviewItem review={review} />
                    </React.Fragment>)
                }
            </StyledReviewList>
        </StyledReviewContainer>
    )
}

export default ReviewList
