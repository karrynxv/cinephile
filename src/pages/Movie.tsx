import ItemBlock from "components/ItemBlock/ItemBlock"
import { useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import currentStore, { selectMovie } from "store/currentStore"

const Movie = () => {
  const {id} = useParams()
  const fetchData = currentStore(
    (state) => state.fetchData
  ) as (type:string,id:string|undefined) => void
  const movie = currentStore(selectMovie)
  const isMounted = useRef<boolean>(false)
  
  useEffect(() => {
    if(isMounted.current){
        fetchData('movie',id)
    }
    isMounted.current = true
  }, [isMounted.current])
  return (
    <>
      {movie && <ItemBlock media={movie} close={() => false} active={true} current={true} type='movie' />}
    </>
  )
}

export default Movie