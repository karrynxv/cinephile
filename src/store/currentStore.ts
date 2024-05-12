import { create } from "zustand";
import { apiUrl, apiKey } from "./url";
import axios from "axios";
import { CurrentState } from "types/Movie";
const currentStore = create<CurrentState>((set) => ({
    movie: null,
    tv: null,
    fetchData: async (type:string, id:number) => {
        try {
            const url = `${apiUrl}${type}/${id}?language=ru-RU&api_key=${apiKey}`
            const response = await axios.get(url)
            if(type === 'movie') set({ movie: response.data })
            else set({ tv: response.data })
        } catch (error) {
           console.error('Произoишла ошибка в Current', error);
        }
    }
}))
export const selectMovie = (state: CurrentState) => state.movie
export const selectTv= (state: CurrentState) => state.tv

export default currentStore