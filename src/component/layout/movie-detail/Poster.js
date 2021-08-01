import React from 'react'
import { PosterImage, StyledPoster } from './movie-detail.style';

const Poster = () => {
    return (
        <StyledPoster>
            <PosterImage src={'https://img.republicworld.com/republic-prod/stories/images/16204727016096737dbccb3.jfif'} />
        </StyledPoster>
    )
}

export default Poster