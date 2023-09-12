import { Link } from 'react-router-dom'
import style from './SessionTime.module.scss'
import classNames from 'classnames'

interface SessionTimeProps {
  id: number
  time: string
}

export const SessionTime = ({ id, time }: SessionTimeProps) => (
  <Link to={`/buy/${id}`} className={classNames(style.SessionTime, 'hover')}>{time}</Link>
)
