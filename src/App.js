import React from 'react'
import WeatherCard from './components/WeatherCard/WeatherCard'
import { useSelector, useDispatch } from 'react-redux'
import { fillWeatherData } from './store/appSlice'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/onecall?lat=-41.211128&lon=174.908081&exclude=daily,minutely,current,alerts&units=metric&appid=4002c9bf4f3883a9b0fa82e18a970207'
const API_KEY = '4002c9bf4f3883a9b0fa82e18a970207'
const App = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fillWeatherData())
  } , [])
  const getStore = useSelector(appSlice => appSlice)
  console.log(getStore)
  return (
    <div>
      <WeatherCard />
    </div>
  )
}

export default App