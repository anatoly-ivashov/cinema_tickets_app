import { useGetPokemonByNameQuery } from '../../api/rtkApi'
import { MovieList } from '../../components/MovieList'
import { Title } from '../../components/Title'
import style from './MainPage.module.scss'

export const MainPage = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className={style.MainPage}>
      <Title center >Выберите фильм</Title>
      <MovieList className={style.movieList} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
