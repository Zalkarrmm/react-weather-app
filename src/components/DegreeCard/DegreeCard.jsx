import cls from './DegreeCard.module.scss'
import React from 'react'
const DegreeCard = ({ props, temp, stringTime }) => {
  const icon = props.weather.map(item => {return item.icon })
  return (
    <div className={cls.weatherItemHourly}>

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