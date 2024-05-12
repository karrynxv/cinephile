import { Link } from "react-router-dom"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import popularStore, { selectPopularMovies, selectPopularTvs } from "store/popularStore";
import { Movie } from "types/Movie";
import { useEffect, useRef, useState } from "react";
import { imageMini } from "store/url";
import ItemBlock from "components/ItemBlock/ItemBlock";

interface contentProps {
    type: string
}

const Content: React.FC<contentProps> = ({ type }) => {
    
    const fetchData = popularStore(
        (state) => state.fetchData
      ) as (type:string) => void
      const popularMovies = popularStore(selectPopularMovies) as Movie[]
      const popularTvs = popularStore(selectPopularTvs) as Movie[]
      const isMounted = useRef<boolean>(false)
      
      useEffect(() => {
        if(isMounted.current){
            fetchData(type)
        }
        isMounted.current = true
      }, [isMounted.current])
        
      const [active, setActive] = useState<boolean>(false)
      const [media, setMedia] = useState<Movie | null>(null)
      const getMedia = (type:string, item:Movie) => {
        if(type === 'movie') setMedia(item)
        else setMedia(item)
        setActive(true)
      }
      
      const closeItemBlock = () => setActive(false)
      
    return (
        <section className="media">
            <h2>
                <Link className="media-title" to={type === 'movie' ? '/movies' : '/tvs'}>
                    {type === 'movie' ? 'Фильмы' : 'Сериалы'}
                    <i className="fa-solid fa-chevron-right"></i>
                </Link>
            </h2>
            <Splide className="media-slider" 
                options={{
                    type: 'loop',
                    perPage: 5.5,
                    perMove: 5.5,
                    pagination: false,
                    gap: '24px',
                    autoplay: true,
                    breakpoints: {
                        600: {
                            perPage: 1
                        }
                    }
                }}
            >
                { isMounted.current && (
                    <>
                        {type === 'movie' ? popularMovies?.map((item) => (
                            <SplideSlide key={item.id} className="media-slider__item" onClick={() => getMedia(type,item)}>
                                 <img src={imageMini + item.poster_path} alt="" />
                            </SplideSlide>
                        )) : popularTvs?.map((item) => (
                            <SplideSlide key={item.id} className="media-slider__item" onClick={() => getMedia(type,item)}>
                                 <img src={imageMini + item.poster_path} alt="" />
                            </SplideSlide>
                        ))}
                    </>
                ) }
            </Splide>
            <ItemBlock media={media} active={active} close={closeItemBlock} type={type} current={false}/>
        </section>
    )
}

export default Content