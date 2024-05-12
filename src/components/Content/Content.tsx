import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import popularStore, { selectPopularMovies, selectPopularTvs } from "store/popularStore"
import { imageMini } from "store/url"
import { Movie } from "types/Movie"
interface contentProps {
  type: string
}
const Content:React.FC<contentProps> = ({ type }) => {
  const [content, setContent] = useState<null | Movie[]>(null) 
  const [currentPage, setCurrentPage] = useState<number>(1) 
  const [totalPages, setTotalPages] = useState<number>(500) 
  const isMounted = useRef<boolean>(false)
  const fetchData = popularStore(
    (state) => state.fetchData
  ) as (type:string, page:number) => void
  const popularMovies = popularStore(selectPopularMovies) as Movie[]
  const popularTvs = popularStore(selectPopularTvs) as Movie[]
  useEffect(() => {
      if(isMounted.current){
        fetchData(type,currentPage)
        if(type === 'movie') setContent(popularMovies)
        else  setContent(popularTvs)
    }
    isMounted.current = true
  }, [isMounted.current,fetchData,popularMovies,popularTvs])
  const changePage = (dir:string) => {
    if(dir === 'next') setCurrentPage(currentPage+1)
    else setCurrentPage(currentPage-1)
    fetchData(type, currentPage)
    setContent(type === 'movie' ? popularMovies : popularTvs)
    window.scrollY = 0
    window.scroll(0, 0)
  } 
  return (
    <section className='container media'>
      <h2>Все {type == "movie" ? "Фильмы" : "Сериалы"}</h2>
      <div className='media-content'>
        {content?.map((item: Movie) => (
          <Link to={`/${type}/${item.id}`} key={item.id}>
            <img src={imageMini + item.poster_path} alt='' />
          </Link>
        ))}
      </div>
      <div className='pagination'>
        <button onClick={()=>changePage("prev")} disabled={currentPage == 1}>
          BACK
        </button>
        <span>
          Страница { currentPage } - { totalPages }
        </span>
        <button
          onClick={()=>changePage("next")}
          disabled={currentPage == totalPages}
        >
          NEXT
        </button>
      </div>
    </section>
  )
}

export default Content
