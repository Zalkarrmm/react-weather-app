import cls from './DegreeCard.module.scss'
import React from 'react'
const DegreeCard = ({ props, temp, stringTime, onClickIndivid }) => {
  const icon = React.useMemo(() => {
    return props.weather.map(item => {return item.icon})
  }, [props.weather])

  return (
    <div onClick={onClickIndivid} className={cls.weatherItemHourly}>

      <p className={cls.weatherTime}>
        {stringTime}
      </p>
      <img src={'https://openweathermap.org/img/wn/'+ icon +'.png'} alt="icon" />
      <p>
        {temp}°C
      </p>
    </div>
  )
}

export default DegreeCard