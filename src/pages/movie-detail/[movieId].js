import React from 'react';
import { useRecoilValueLoadable, useRecoilState } from 'recoil';
import { useRouter } from 'next/dist/client/router';
import { getTopVidsSelector } from '@recoil/movie-detail/youtubeList';

import Poster from '@component/layout/movie-detail/Poster'
import ReviewList from '@component/layout/movie-detail/ReviewList';
import YoutubeList from '@component/layout/movie-detail/YoutubeList';
import { Background, Main } from '@component/layout/movie-detail/movie-detail.style';


const MovieDetail = (props) => {

    const router = useRouter();
    const { movieId } = router.query; // router.query는 /movie-detail/[movieId] 에서 moviceId를 담고 있다.
    const getTopVidsLoadable = useRecoilValueLoadable(getTopVidsSelector);


    switch (getTopVidsLoadable.state) {
        case 'hasValue':
            return (
                <Background>
                    <Main>
                        <Poster />
                        <ReviewList />
                    </Main>
                    <YoutubeList />
                </Background>
            );
        case 'loading':
            return (<div>loading...</div>);
        case 'hasError':
            throw getTopVidsLoadable.contents;
    }
}

export default MovieDetail