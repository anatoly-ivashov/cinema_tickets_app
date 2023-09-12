import classNames from 'classnames'
import style from './SeatsSelect.module.scss'
import { Seat } from './components/Seat'

export const SeatsSelect = () => {
  let seat = 1
  let row = 1
  let resetNums = [4, 6, 5]
  const emptyCells = [2, 3, 4, 5, 6, 12, 13, 14, 18, 19, 25, 26]

  return (
    <div className={style.SeatsSelect}>
      <div className={style.display}>
        <i className="ic-display"></i>
        <span>Экран</span>
      </div>

      <div className={style.place}>
        <div className={style.rows}>
          {Array(7).fill(0).map((item, i) => (
            <div
              key={`${i}-${Date.now()}`}
              className={style.row}
            >{i + 1}</div>
          ))}
        </div>
        <div className={style.seats}>
          {Array(63).fill(0).map((item, i) => {
            if (emptyCells.includes(i)) {
              return <div key={`${i}-${Math.random()}`} />
            } else {
              const classes = classNames('ic-seat', {
                [style.available]: seat !== 3 && seat !== 5,
                [style.busy]: seat === 3,
                [style.selected]: seat === 5,
              })
              const data = {
                id: seat,
                row,
                seat,
                status: seat !== 3 ? 'available' : 'busy'
              }
              if (seat === resetNums[row - 1] || seat === 9) {
                seat = 1
                row++
                data.row = row
              } else {
                seat++
              }
              return <Seat key={`${row}-${seat}`} className={classes} data={data} />
            }
          })}
        </div>
      </div>

      <div className={style.info}>
        <div className={classNames(style.infoItem, style.available)}>
          <i className="ic-dot" />
          <span>Доступно</span>
        </div>
        <div className={classNames(style.infoItem, style.busy)}>
          <i className="ic-dot" />
          <span>Занято</span>
        </div>
        <div className={classNames(style.infoItem, style.selected)}>
          <i className="ic-dot" />
          <span>Выбрано</span>
        </div>
      </div>
    </div>
  )
}
