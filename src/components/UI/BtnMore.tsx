import { Link } from "react-router-dom"
interface BtnMoreProps {
  id: number,
  type: string
}
const BtnMore:React.FC<BtnMoreProps> = ({id, type}) => {
  return (
    <Link to={`/${type}/${id}`} className="btn-more">
        <i className="fa-solid fa-bars"></i>
        Подробнее
    </Link>
  )
}

export default BtnMore