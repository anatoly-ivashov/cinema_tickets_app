import classNames from 'classnames'
import { Header } from '../../components/Header'
import { Movie } from '../../types'

import style from './MoviePage.module.scss'

const data: Movie = {
  id: 1,
  img: "https://avatars.mds.yandex.net/get-afishanew/23114/1b65ed28-dcdb-40da-b4fd-ef7d35e12cb0/s190x280",
  title: "Паранормальное явление",
  genre: "Драма",
  description: "Четверо блогеров-инфлюэнсеров отправляются в заброшенный дом, где когда-то жили оккультисты. Желая пощекотать нервишки своим зрителям, они обещают провести там ритуал. Но обычный развлекательный стрим превращается в настоящее противостояние с потусторонними силами.",
  times: ['10:00', '12:30', '15:25', '19:45', '22:00', '23:55'],
  actors: ['Арнольд Шварцнегер', 'Киану Ривз', 'Дженифер Лопез'],
  country: 'США',
  duration: 93,
  year: 2023,
  premier: '7 сентября 2023'
}

export const MoviePage = () => {
  const renderSessionTimes = (times: string[]) => {
    return times.map((time) => {
      const classes = classNames(style.sessionTimeItem, 'hover')
      return <div key={time} className={classes}>{time}</div>
    })
  }

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
