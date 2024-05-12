import BtnMore from "components/UI/BtnMore"
import { imageFull, imageMini } from "store/url"
import { Movie } from "types/Movie"
interface ItemBlockProps {
  media: Movie | null
  active: boolean
  close: () => void
  current: boolean
  type: string
}

const ItemBlock:React.FC<ItemBlockProps> = ({media, active, close, type,current}) => {
  return (
    <div className={`media__info ${active ? 'active' : ''}`}>
      <i className={`fa-solid fa-close ${!current ? 'close' : 'none'}`} onClick={() => close()}></i>
      {media && (
        <div className="media__info-content">
            <div className="media__info-content-block">
                <h2>{media.title || media.name}</h2>
                <p>{media.overview || 'Неописуемый...'}</p>
                <BtnMore type={type} id={media.id}/>
            </div>
          <img src={imageFull + media.backdrop_path} alt="" className={current ? 'blur' : ''} />
          <img src={imageMini + media.poster_path} alt="" className={current ? 'active' : 'none'} />
        </div>
      )}
        
    </div>
  )
}

export default ItemBlock