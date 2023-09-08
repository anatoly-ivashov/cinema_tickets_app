import { Link } from 'react-router-dom'
import style from './MovieCard.module.scss'
import { useDispatch } from 'react-redux'
import { setMovieTitle } from '../../slices'
import { IMovieCard } from '../../types'

interface MovieCardProps {
  data: IMovieCard
}

export const MovieCard = (props: MovieCardProps) => {
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(setMovieTitle({
      id: props.data.id,
      title: props.data.title + ' - Test'
    }))
  }

  return (
    <div className={style.wrap}>
      <button onClick={onClick}>Изменить</button>
      <Link to="/movie" className={style.MovieCard}>
        <div className={style.imgBlock}>
          <img src={props.data.img} alt={props.data.title} />
        </div>
        <h3 className={style.title}>{props.data.title}</h3>
        <div className={style.genre}>{props.data.genre}</div>
      </Link>
    </div>
  )
}
