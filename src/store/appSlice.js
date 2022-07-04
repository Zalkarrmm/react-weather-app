import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name :'app',
  initialState :{
    weeklyWeather: [],
    hourlyWeather: [],
    // location: {
    //   lat: '42.882004',
    //   lon: '74.582748',
    // },
  },
  reducers: {
    fillWeatherData : (state) => {
      console.log(state)
    },
  },
})
export const { fillWeatherData } = appSlice.actions
export default appSlice.reducer