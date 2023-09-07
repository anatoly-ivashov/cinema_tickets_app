import classNames from 'classnames'
import { IMovieCard } from '../../types'
import { MovieCard } from '../MovieCard'

import style from './MovieList.module.scss'

const movies: IMovieCard[] = [
  {
    img: "https://avatars.mds.yandex.net/get-afishanew/23114/1b65ed28-dcdb-40da-b4fd-ef7d35e12cb0/s190x280",
    title: "Паранормальное явление",
    genre: "Драма"
  },
  {
    img: "https://avatars.mds.yandex.net/get-afishanew/23114/1b65ed28-dcdb-40da-b4fd-ef7d35e12cb0/s190x280",
    title: "Паранормальное явление 2",
    genre: "Комедия"
  },
  {
    img: "https://avatars.mds.yandex.net/get-afishanew/23114/1b65ed28-dcdb-40da-b4fd-ef7d35e12cb0/s190x280",
    title: "Паранормальное явление 3",
    genre: "Ужасы"
  }
]

interface MovieListProps {
  className?: string
}

export const MovieList = ({ className }: MovieListProps) => {
  const classes = classNames(style.MovieList, className)
  function renderList(data: IMovieCard[]) {
    return data.map((movieData, i) => <MovieCard key={i} data={movieData} />)
  }

  return (
    <div className={classes}>{renderList(movies)}</div>
  )
}
