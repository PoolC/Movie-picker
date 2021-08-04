import React from 'react'
import { useRecoilState, useRecoilValueLoadable } from 'recoil'
import { getTopVidsSelector, movieTitleAtom, topVidsAtom } from '@recoil/movie-detail/youtubeList';

const YoutubeList = () => {

    const [movieTitle, setMovieTitle] = useRecoilState(getTopVidsSelector);

    const onChangeMovieTitle = () => {
        setMovieTitle('SINGSINGSING');
    }

    return (
        <div>
            <form onSubmit={onChangeMovieTitle} style={{ backgroundColor: 'white' }}>
                <input placeholder='영화 제목 입력해봐' />
                <button onClick={onChangeMovieTitle} />
                <div>
                    {movieTitle}
                </div>
            </form>
        </div>
    )
}

export default YoutubeList
