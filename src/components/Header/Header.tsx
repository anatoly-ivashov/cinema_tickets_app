import { Link } from 'react-router-dom'
import style from './Header.module.scss'
import { Title } from '../Title'
import classNames from 'classnames'

interface HeaderProps {
  title: string
  onClick?: () => void
}

export const Header = (props: HeaderProps) => {
  const { title, onClick } = props

  return (
    <div className={style.Header}>
      <Link to='/' className={classNames('hover', style.backBtn)} onClick={onClick}>Главная</Link>
      <Title center className={style.title}>{title}</Title>
    </div>
  )
}
