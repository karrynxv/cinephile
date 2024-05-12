import ItemBlock from "components/ItemBlock/ItemBlock"
import { useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import currentStore, { selectTv } from "store/currentStore"

const Tv = () => {
  const {id} = useParams()
  const fetchData = currentStore(
    (state) => state.fetchData
  ) as (type:string,id:string|undefined) => void
  const tv = currentStore(selectTv)
  const isMounted = useRef<boolean>(false)
  
  useEffect(() => {
    if(isMounted.current){
        fetchData('tv',id)
    }
    isMounted.current = true
  }, [isMounted.current])
  return (
    <>
      {tv && <ItemBlock media={tv} close={() => false} active={true} current={true} type='movie' />}
    </>
  )
}

export default Tv