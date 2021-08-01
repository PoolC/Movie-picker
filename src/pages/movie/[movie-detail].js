import React from 'react';
import { useRouter } from 'next/dist/client/router';
import Poster from '../../component/layout/movie-detail/Poster'
import ReviewList from '../../component/layout/movie-detail/ReviewList';
import YoutubeList from '../../component/layout/movie-detail/YoutubeList';
import { Background, Main } from '../../component/layout/movie-detail/movie-detail.style';

const MovieDetail = () => {

    const router = useRouter();
    const { movieId } = router.query;

    return (
        <Background>
            <Main>
                <Poster />
                <ReviewList />
            </Main>
            <YoutubeList />
        </Background>
    )
}

export default MovieDetail
