import { rest } from 'msw';

export const handlers = [
    // [상세 정보] - 영화 아이디로 조회한 영화 
    rest.get(
        'http://localhost/movie-detail/:movieId',
        (req, res, ctx) => {

            const { movieId } = req.params;
            return res(
                ctx.status(200),
                ctx.json({
                    movies:
                    {
                        movieId: movieId,
                        title: "Cruella",
                        postUrl: "posterUrl",
                        directorNm: "directorNm",
                        actor: "actor",
                        runtime: "runtime",
                        plot: "plot",
                        genre: "genre"
                    },
                }),
            );
        },
    ),

    rest.get(
        'http://localhost/reviews/movies/:movieId/',
        (req, res, ctx) => {
            const { movieId } = req.params;
            return res(
                ctx.status(200),
                ctx.json([
                    {
                        reviews: {
                            id: 3,
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
                    },
                    {
                        reviews: {
                            id: 0,
                            reviewNickname: "irumi1206",
                            reviewContent: "good!",
                            recommendation_count: 5,
                            comments: [
                                {
                                    commentContent: "really?",
                                    commentNickname: "panda"
                                }
                            ]
                        }
                    },
                    {
                        reviews: {
                            id: 'a34',
                            reviewNickname: "irumi1206",
                            reviewContent: "good!",
                            recommendation_count: 5,
                            comments: [
                                {
                                    commentContent: "really?",
                                    commentNickname: "panda"
                                }
                            ]
                        }
                    }
                ])
            )
        }
    ),

    /**
     * (dev 기준) NextJS 서버에 보내는 요청을 msw가 인터셉트할 수 있도록.. (에러 로그 안 보이게 하기 위해 추가)
     */
    rest.post(
        'https://telemetry.nextjs.org/api/v1/record',
        (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    ctxKey: {
                        key: 'idk..',
                    }
                })
            )
        }
    )
];