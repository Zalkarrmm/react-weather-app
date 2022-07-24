import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchWeather = createAsyncThunk(
  'hourlyWeather/fetchWeather',
  async function(state, { rejectWithValue }){
    try{
      const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=42.882004&lon=74.582748&appid=4002c9bf4f3883a9b0fa82e18a970207')

      if(!response.ok){
        throw new Error('Server Error')
      }
      const data = await response.json()
      return data
    }catch(error){
      return rejectWithValue(error)
    }
  },
)
//TODO : create new files to sepparate the async functions

const appSlice = createSlice({
  name :'app',
  initialState :{
    dailyWeather: [],
    hourlyWeather: [],
    currentWeather: [],
    location: {
      lat: '42.882004',
      lon: '74.582748',
      timezone: '',
    },
  },
  reducers: {
    notWorkingLaziShit : (state) => {
      console.log(state)
    },
  },
  extraReducers: {
    [fetchWeather.pending] : (state) => {
      state.status = 'loading'
    },
    [fetchWeather.fulfilled] : (state, action) => {
      state.status = 'resolved'
      state.hourlyWeather = action.payload.hourly
      state.currentWeather = action.payload.current
      state.dailyWeather = action.payload.daily
      state.location.timezone = action.payload.timezone
      // console.log(state.hourlyWeather)
    },
    [fetchWeather.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
  },
})
export const { fillWeatherData } = appSlice.actions
export default appSlice.reducer