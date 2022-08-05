import React from 'react'
import cls from './ModalWindow.module.scss'

const ModalWindow = ({ props, setModalClose }) => {
  let weatherDate = new Date(props.dt*1000)
  let round = Math.round(((props.temp.min - 273) + (props.temp.max - 273) + (props.temp.eve - 273) +(props.temp.morn - 273) + (props.temp.day - 273) + (props.temp.night - 273)) / 6)
  let minDeg = Math.round(props.temp.min - 273)
  let maxDeg = Math.round(props.temp.max-273)
  let eveDeg = Math.round(props.temp.eve - 273)
  let mornDeg = Math.round(props.temp.morn - 273)
  let nightDeg = Math.round(props.temp.night - 273)
  let dayDeg = Math.round(props.temp.day - 273)
  let sunriseHour = new Date(props.sunrise * 1000)
  let sunriseTime = `${sunriseHour.getHours() < 10 ? '0' + sunriseHour.getHours() : sunriseHour.getHours()} : ${sunriseHour.getMinutes() < 10 ? '0' + sunriseHour.getMinutes() : sunriseHour.getMinutes()}`
  let sunsetHour = new Date(props.sunset * 1000)
  let sunsetTime = `${sunsetHour.getHours() < 10 ? '0' + sunsetHour.getHours() : sunsetHour.getHours()} : ${sunsetHour.getMinutes() < 10 ? '0' + sunsetHour.getMinutes() : sunsetHour.getMinutes()}`
  const icon = React.useMemo(() => {
    return props.weather.map(item => {return item.icon})
  }, [props.weather])
  let description = props.weather.map(item => {return item.description})
  return (
    <div onClick={setModalClose} className={cls.modalRoot}>
      <div className={cls.ModalBlock} onClick={e => e.stopPropagation()}>
        <button onClick={setModalClose} className={cls.closeModalBtn}>CLOSE</button>
        <div className={cls.modalSection}>
          <div className={cls.topBlock}>
            <div className={cls.topLeftBlock}>
              <p className={cls.dateOfWeather}>{weatherDate.toDateString()}</p>
              <img className={cls.weatherIcon} src={'https://openweathermap.org/img/wn/'+ icon +'@4x.png'} alt="icon" />
              <p className={cls.weatherDescription}>{description}</p>
            </div>
            <div className={cls.topRightBlock}>
              <p className={cls.roundDeg}>{round}°C</p>
              <hr />
              <p className={cls.minMaxDeg}><span className={cls.maxTemp}>{maxDeg}°C</span>\<span className={cls.minTemp}>{minDeg}°C</span></p>
            </div>
          </div>
          <div className={cls.midBlock}>
            <p>sunrise : {sunriseTime}</p> <p> sunset : {sunsetTime}</p>
          </div>
          <div className={cls.bottomBlock}>
            <div className={cls.bottomLeftBlock}>
              <ul>
                <li>
                  night: {nightDeg}°C   <img src="/icons/night-mode.png" alt="" />
                </li>
                <li>
                  morning:  {mornDeg}°C <img src="/icons/sunrise.png" alt="" />
                </li>
                <li>
                  day:  {dayDeg}°C <img src="/icons/sunny-day.png" alt="" />
                </li>
                <li>
                  eve: {eveDeg}°C <img src="/icons/day-and-night.png" alt="" />
                </li>
              </ul>
            </div>
            <div className={cls.bottomRightBlock}>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalWindow