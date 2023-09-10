import classNames from 'classnames'
import { Header } from '../../components/Header'
import style from './MoviePage.module.scss'
import { useParams } from 'react-router-dom'
import { Title } from '../../components/Title'
import { useGetMovieByIdQuery } from '../../api'


export const MoviePage = () => {
  const params = useParams()
  const { isLoading, data } = useGetMovieByIdQuery(params.id!)
  console.log('data', data)

  const renderSessionTimes = (times: string[]) => {
    return times.map((time) => {
      const classes = classNames(style.sessionTimeItem, 'hover')
      return <div key={time} className={classes}>{time}</div>
    })
  }

  if (isLoading) return <h1>Загрузка...</h1>
  if (!data) return <Title center>Фильм не найден</Title>

  return (
    <div className={style.MoviePage}>
      <Header title="Название фильма" />
      <div className={style.content}>
        <div>
          <div className={style.imgBlock}>
            <img src={data.img} alt={data.title} />
          </div>
          <div className={style.desc}>{data.description}</div>
        </div>
        <div className={style.rightCol}>
          <div className={style.info}>
            <div className={style.infoLabel}>Премьера</div>
            <div className={style.infoValue}>{data.premier}</div>
            <div className={style.infoLabel}>В ролях</div>
            <div className={style.infoValue}>{data.actors.join(', ')}</div>
            <div className={style.infoLabel}>Длительность</div>
            <div className={style.infoValue}>{data.duration}</div>
            <div className={style.infoLabel}>Страна</div>
            <div className={style.infoValue}>{data.country}</div>
            <div className={style.infoLabel}>Год</div>
            <div className={style.infoValue}>{data.year}</div>
          </div>
          <div className={style.session}>
            <h3 className={style.subtitle}>Сеансы</h3>
            <div className={style.sessionTimesList}>
              {renderSessionTimes(data.times)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
