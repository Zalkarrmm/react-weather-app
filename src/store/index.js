import { configureStore } from '@reduxjs/toolkit'
import appSlice from './App/appSlice'

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
})