import { create } from "zustand";
import { apiUrl, apiKey } from "./url";
import axios from "axios";
import { PopularState } from "types/Movie";
const popularStore = create<PopularState>((set) => ({
    popularMovies: null,
    popularTvs: null,
    fetchData: async (type:string,currentPage:number = 1) => {
        try {
            const url = `${apiUrl}${type}/popular?language=ru-RU&page=${currentPage}&api_key=${apiKey}`
            const response = await axios.get(url)
            if(type === 'movie') set({ popularMovies: response.data.results })
            else set({ popularTvs: response.data.results })
        } catch (error) {
           console.error('Произoишла ошибка в Popular', error);
        }
    }
}))
export const selectPopularMovies = (state: PopularState) => state.popularMovies
export const selectPopularTvs= (state: PopularState) => state.popularTvs

export default popularStore