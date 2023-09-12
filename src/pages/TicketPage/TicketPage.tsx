import { useSelector } from 'react-redux'
import { Header } from '../../components/Header'
import { InfoTable, InfoTableData } from '../../components/InfoTable'
import { SeatsSelect } from '../../components/SeatsSelect'
import style from './TicketPage.module.scss'
import { RootState } from '../../store'
import { OrderState } from '../../slices'
import classNames from 'classnames'

export const TicketPage = () => {
  const { order } = useSelector((state: RootState) => state)
  const price = 500
  const seatsCount = order.seats.length
  const totalPrice = price * seatsCount

  const getOrderInfo = (order: OrderState) => {
    return order.seats.map(({ row, seat }, i) => ({
      label: `Билет ${i + 1}`,
      value: `Ряд ${row} место ${seat}`
    }))
  }

  const getPriceInfo = (count: number, price: number) => {
    return [
      {
        label: 'Количество',
        value: count
      },
      {
        label: 'Цена',
        value: `${price}₽`
      },
    ]
  }

  return (
    <div className={style.TicketPage}>
      <Header title="Покупка билетов" />
      <div className={style.content}>
        <SeatsSelect />
        {!!seatsCount && <div className={style.info}>
          <h3 className={style.title}>Выбранные места</h3>
          <InfoTable data={getOrderInfo(order)} />
          <div className={style.info}>
            <InfoTable data={getPriceInfo(seatsCount, price)} />
          </div>
          <div className={style.total}>
            <span>Итого:</span>
            <strong>{totalPrice}₽</strong>
          </div>
          <div className={classNames(style.buyBtn, 'hover')}>Купить</div>
        </div>}
        {!seatsCount && <h3 className={classNames(style.title, style.titleCenter)}>Выберите места</h3>}
      </div>
    </div>
  )
}
