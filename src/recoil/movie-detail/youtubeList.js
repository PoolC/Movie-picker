import { atom, selector } from 'recoil';
import axios from 'axios';

export const movieTitleAtom = atom({
    key: 'youtubeList/movieTitleAtom',
    default: '',
})


export const topVidsAtom = atom({
    key: 'youtubeList/topVidsAtom',
    default: [],
})

// const YOUTUBE_API_KEY = 'AIzaSyDHgUKmI-wSmRduyJpE6AyFYFf3zHxcQ6E';
// const query = '라라랜드'
export const getTopVidsSelector = selector({
    key: 'youtubeList/getTopVidsSelector',
    get: async ({ get }) => {

        const query = get(movieTitleAtom)

        const res = await axios.get(`https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?
                                part=snippet
                                &order=viewCount
                                &q=${query}
                                &maxResult=10
                                &type=video`);

        return res.items;
    },
    set: ({ set }, newValue) => {
        set(topVidsAtom, newValue);
    }
})