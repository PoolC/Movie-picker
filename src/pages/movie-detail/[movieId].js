import React, { useEffect } from 'react';
import { useRecoilState, useResetRecoilState, } from 'recoil';
import { movieDetailAtom, reviewAtom, reviewModalAtom } from '@recoil/movie-detail/movieDetail';
import axios from 'axios';

import Poster from '@component/layout/movie-detail/Poster'
import ReviewList from '@component/layout/movie-detail/ReviewList';
import YoutubeList from '@component/layout/movie-detail/YoutubeList';
import { StyledBackground, StyledMain } from '@component/layout/movie-detail/movie-detail.style';


const MovieDetail = ({ movieInfo, reviewList }) => {
    const [movieDetail, setMovieDetail] = useRecoilState(movieDetailAtom);
    const [reviews, setReviews] = useRecoilState(reviewAtom);
    const [reviewModal, setReviewModal] = useRecoilState(reviewModalAtom);
    // const router = useRouter();
    // const { movieIdQuery } = router.query; // router.query는 /movie-detail/[movieId] 에서 movieId를 담고 있다.

    useEffect(() => {
        console.log('movieDetail: ', movieInfo);
        console.log('reviews: ', reviewList);
        setMovieDetail(movieInfo);
        setReviews(reviewList);
    }, [])

    return (
        <StyledBackground>
            <StyledMain>
                <Poster />
                <ReviewList />
            </StyledMain>
            <YoutubeList />
            {
                reviewModal
                    ?
                    <div>
                        === Review Modal Opened ===
                    </div>
                    :
                    null
            }
        </StyledBackground>
    )
}


// ServerSide Rendering
export const getServerSideProps = async (context) => {
    const movieId = context.params.movieId;

    const [movieResponse, reviewResponse] = await Promise.all([
        axios.get(`/movie-detail/${movieId}`),
        axios.get(`/reviews/movies/${movieId}`),
        // axios.get(`/top-videos/${movieId}`), => topVidsResponse?
    ])

    if (movieResponse.status !== 200 || reviewResponse.status !== 200) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    } else {
        const movieInfo = movieResponse.data.movies;
        const reviewList = reviewResponse.data;
        // const topVidsList = topVidsResponse.data
        return { props: { movieInfo, reviewList } }
    }

}

export default MovieDetail