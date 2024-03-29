import React from 'react'
import DegreeCard from '../DegreeCard/DegreeCard'
import cls from './WeatherCard.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination } from 'swiper'
import { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import ModalWindow from '../ModalWindow/ModalWindow'
// import appSlice from '../../store/appSlice'
export default function WeatherCard(){
  const { hourlyWeather } = useSelector(appSlice => appSlice.app)
  const { currentWeather } = useSelector(appSlice => appSlice.app)
  const { status } = useSelector(appSlice => appSlice.app)
  const { dailyWeather } = useSelector(appSlice => appSlice.app)
  let { location } = useSelector(appSlice => appSlice.app)
  const [tempData, setTempData] = useState('hourly')
  const [currentIcon, setCurrentIcon] = useState(null)
  const [todaysMin, setTodaysMin] = useState(null)
  const [todaysMax, setTodaysMax] = useState(null)
  const [todaysAround, setTodaysAround] = useState(null)
  const [weatherDescription, setWeatherDescription] = useState(null)
  const [loading, setLoading] = useState(true)
  const [modalData, setModalData] = useState(null)
  const [modalActive, setModalActive] = useState(false)
  useEffect(() => {
    if(status !== 'resolved'){
      setLoading(true)
    }else if(currentWeather.weather ){
      setLoading(false)
      setCurrentIcon(currentWeather.weather.map(item => {return item.icon}))
      setWeatherDescription(currentWeather.weather.map(item => {return item.description}))
    }
  }, [currentWeather, status])
  useEffect(() => {
    if(dailyWeather[0]){
      setTodaysMin(Math.round(dailyWeather[0].temp.min) - 273)
      setTodaysMax(Math.round(dailyWeather[0].temp.max) - 273)
    }
  }, [dailyWeather])
  useEffect(() => {
    if(todaysMax && todaysMin){
      setTodaysAround((todaysMax + todaysMin) / 2)
    }
  }, [todaysMax, todaysMin])

  function onClickIndivid(item){
    setModalActive(true)
    setModalData(item)
  }


  const HourlyWheatherTemplate = useMemo(() => hourlyWeather.map((item, i) => {
    let stringTime = new Date(item.dt*1000)
    let temp = Math.round((item.temp - 273))
    return (
      <SwiperSlide className={cls.SwiperSlide} key={item.dt}>
        <DegreeCard props={item} stringTime={`${stringTime.getHours()}:00`} temp={temp} />
      </SwiperSlide>
    )
  }), [hourlyWeather])


  let currentTime = new Date(currentWeather.dt*1000)
  return(
    <div className={cls.Container}>
      { loading === false ? (
        <div className={cls.card}>
          <div className={cls.cardHeader}>
            <div className={cls.mainInfo}>
              <p className={cls.weatherCity}></p>
              <div className={cls.weatherDate}>
                <p>{currentTime.toDateString()}</p>
              </div>
              <p>{location.timezone}</p>
              {currentIcon &&
                <img src={`https://openweathermap.org/img/wn/${currentIcon}@4x.png`} alt="icon" />
              }
              <p>{weatherDescription}</p>

            </div>
            <div className={cls.weatherDegree}>
              <p className={cls.weatherMidDeg}>{todaysAround && <>{todaysAround}</>}°</p>
              <p>{todaysMax && <>{todaysMax}</>}°/<span className={cls.lessDegree}>{todaysMin && <>{todaysMin}</>}°</span></p>
            </div>
          </div>
          <div className={cls.cardFooter}>
            <div className={cls.weatherNav}>
              <ul>
                <li onClick={() => setTempData('hourly')} >Hourly</li>
                <li onClick={() => setTempData('daily')}>Daily</li>
                <li>Details</li>
                <li>Precipitation</li>
              </ul>
              <ol>
                <li>•••</li>
              </ol>
            </div>
            <div className={cls.watherDaily}>


              <Swiper
                slidesPerView={5}
                pagination={{
                  clickable: true,
                }}
                modules={[ Pagination ]}
                className={cls.mySwiper}
              >

                {hourlyWeather &&  tempData === 'hourly' ?
                  HourlyWheatherTemplate
                  : tempData === 'daily' && dailyWeather &&
                dailyWeather.map( (item, i) => {
                  const stringTime = new Date(item.dt*1000)
                  let mm = stringTime.getMonth() + 1
                  mm < 10 ? mm = '0' + mm : mm
                  const temp = Math.round((item.temp.max + item.temp.min) / 2 - 273)
                  return (
                    <SwiperSlide className={cls.SwiperSlide} key={item.dt}>
                      <DegreeCard onClickIndivid={() => onClickIndivid(item)}  props={item} stringTime={`${stringTime.getDate()}.${mm}`} temp={temp} />
                    </SwiperSlide>
                  )
                })
                }

              </Swiper>
            </div>
          </div>
        </div>
      )
        : <div className={cls.ldsdualring}></div>
      }
      {modalActive &&
        <ModalWindow setModalClose={() => setModalActive(false)} props={modalData} />
      }
    </div>
  )
}