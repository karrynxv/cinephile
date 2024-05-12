export interface Movie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id:number,
    original_language:'en',
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    name: string
}
export type UpcomingItemProps = {
    movie: Movie
    next: () => void
    nextSlide: Movie
}
export interface UpcomingStateMovies {
    upcoming: null | Movie[]
    fetchUpcoming: any
}
export interface PopularState {
    popularMovies: null | Movie[]
    popularTvs: null | Movie[]
    fetchData: any
}
export interface CurrentState {
    movie: null | Movie
    tv: null | Movie
    fetchData: any
}