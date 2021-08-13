import React, { useState } from 'react'
import { StyledPosterImage, StyledPoster } from './movie-detail.style';

const Poster = () => {
    const [isHover, setIsHover] = useState(Boolean);

    const onMouseOverHandler = () => {
        setIsHover(true);
    }
    const onMouseOutHandler = () => {
        setIsHover(false);
    }

    return (
        <>
            {
                isHover
                    ?
                    <StyledPoster onMouseOut={onMouseOutHandler}>
                        <StyledPosterImage src={'https://img.republicworld.com/republic-prod/stories/images/16204727016096737dbccb3.jfif'} />
                        <div
                            style={{ backgroundColor: 'rgba(20,20,20,0.5)' }}
                        >
                        </div>
                    </StyledPoster>
                    :
                    <StyledPoster onMouseOver={onMouseOverHandler} >
                        <StyledPosterImage src={'https://img.republicworld.com/republic-prod/stories/images/16204727016096737dbccb3.jfif'} />
                    </StyledPoster>
            }
        </>
    )
}

export default Poster