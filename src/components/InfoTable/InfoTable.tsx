import { Fragment } from 'react'
import style from './InfoTable.module.scss'
import { InfoTableData } from './types'

interface InfoTableProps {
  data: InfoTableData[]
}

export const InfoTable = ({ data }: InfoTableProps) => {
  const renderItems = (data: InfoTableData[]) => {
    return data.map(({ label, value }) => (
      <Fragment key={label}>
        <div className={style.label}>{label}</div>
        <div>{value}</div>
      </Fragment>
    ))
  }

  return (
    <div className={style.InfoTable}>{renderItems(data)}</div>
  )
}
