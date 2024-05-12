import BtnMore from 'components/UI/BtnMore'
import { imageFull, imageMini } from 'store/url'


import { UpcomingItemProps } from 'types/Movie'
const UpcomingItem:React.FC<UpcomingItemProps> = ({movie, next, nextSlide}) => {
    return (
      <div className="main__upcoming-item">
        <img src={imageFull + movie.backdrop_path} alt="" />
        <div className="main__upcoming-content">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <BtnMore id={movie.id} type='movie'/>
        </div>
        <div className="main__upcoming-item-next" onClick={next}>
          <img src={imageMini + nextSlide.backdrop_path} alt="" />
          <div>
            <span>Следующий</span>
            <h3>{nextSlide.title}</h3>
          </div>
          <div className="main__upcoming-item-next-line"></div>
        </div>
      </div>
    )
  }
  
  export default UpcomingItem