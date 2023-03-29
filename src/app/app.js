import {configureStore} from '@reduxjs/toolkit';
import timersReducer from '../featires/Timers/timersSlice';

export const store = configureStore({
  reducer: {
    timers: timersReducer,
  }
})