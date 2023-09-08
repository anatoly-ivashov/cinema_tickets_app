import classNames from 'classnames'
import { IMovieCard } from '../../types'
import { MovieCard } from '../MovieCard'
import style from './MovieList.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

interface MovieListProps {
  className?: string
}

export const MovieList = ({ className }: MovieListProps) => {
  const classes = classNames(style.MovieList, className)
  const { data } = useSelector((state: RootState) => state.movies)

  function renderList(data: IMovieCard[]) {
    return data.map((movieData, i) => <MovieCard key={i} data={movieData} />)
  }

  return (
    <div className={classes}>{renderList(data)}</div>
  )
}
