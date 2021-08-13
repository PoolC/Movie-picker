import { atom, selector, selectorFamily } from 'recoil';
import axios from 'axios';

/**
 * /movie-detail/:movieId 페이지에서 관리하는 atoms
 * 
 * 1. movieDetail => res.data = {movies:
                                    {
                                        movieId: movieId,
                                        title: "Cruella",
                                        postUrl: "posterUrl",
                                        directorNm: "directorNm",
                                        actor: "actor",
                                        runtime: "runtime",
                                        plot: "plot",
                                        genre: "genre"
                                    } 
                                },
    2. Reviews & Comments => res.data = {reviews: 
                                            {
                                                reviewNickname: "irumi1206",
                                                reviewContent: `good! ${movieId}`,
                                                recommendation_count: 5,
                                                comments: [
                                                    {
                                                        commentContent: "really?",
                                                        commentNickname: "panda"
                                                    }
                                                ]
                                            }
                                        }
    3. Top Youtube Videos => res.data = {}
 */

/**
* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*                                               [영화 상세 정보 관련 atom, selector]
* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/
export const movieDetailAtom = atom({
    key: 'movieDetail/movieDetailAtom',
    default: {},
})

/**
* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*                                               [영화 관련 리뷰, 댓글]
* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/
export const reviewAtom = atom({
    key: 'movieDetail/reviewAtom',
    default: []
})


/**
* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*                                               [영화 관련 top 유튜브 영상 목록]
* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const topVidsAtom = atom({
    key: 'movieDetail/topVidsAtom',
    default: [],
})

/**
* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*                                               [리뷰 모달 controller]
* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

export const reviewModalAtom = atom({
    key: 'movieDetail/reviewModalAtom',
    default: false,
})