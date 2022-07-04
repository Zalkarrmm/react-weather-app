import DegreeCard from '../DegreeCard/DegreeCard'
import cls from './WeatherCard.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Pagination } from 'swiper'
import { useEffect, useState } from 'react'
// import { useSelector} from 'react-redux'
// const dispatch = useDispatch()
export default function WeatherCard(){
  // const  hourlyData  = data.hourly
  // console.log(hourlyData)
  return(

    <div className={cls.Container}>
      <div className={cls.card}>
        <div className={cls.cardHeader}>
          <div className={cls.mainInfo}>
            <p className={cls.weatherCity}></p>
            <p className={cls.weatherDate}>September 25, 2015</p>
            <img src="" alt="icon" />
          </div>
          <div className={cls.weatherDegree}>
            <p className={cls.weatherMidDeg}>72°</p>
            <p>81°/<span className={cls.lessDegree}>57°</span></p>
          </div>
        </div>
        <div className={cls.cardFooter}>
          <div className={cls.weatherNav}>
            <ul>
              <li>Hourly</li>
              <li>Daily</li>
              <li>Details</li>
              <li>Precipitation</li>
              <li>•••</li>
            </ul>
            <hr />
          </div>
          <div className={cls.watherDaily}>

            <Swiper
              slidesPerView={5}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}

              modules={[ Pagination ]}
              className={cls.mySwiper}
            >
              <SwiperSlide className={cls.SwiperSlide}>
                <DegreeCard />
              </SwiperSlide>
              <SwiperSlide className={cls.SwiperSlide}>
                <DegreeCard />
              </SwiperSlide>
              <SwiperSlide className={cls.SwiperSlide}>
                <DegreeCard />
              </SwiperSlide>
              <SwiperSlide className={cls.SwiperSlide}>
                <DegreeCard />
              </SwiperSlide>
              <SwiperSlide className={cls.SwiperSlide}>
                <DegreeCard />
              </SwiperSlide>
              <SwiperSlide className={cls.SwiperSlide}>
                <DegreeCard />
              </SwiperSlide>
              <SwiperSlide className={cls.SwiperSlide}>
                <DegreeCard />
              </SwiperSlide>
              <SwiperSlide className={cls.SwiperSlide}>
                <DegreeCard />
              </SwiperSlide>
              <SwiperSlide className={cls.SwiperSlide}>
                <DegreeCard />
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}