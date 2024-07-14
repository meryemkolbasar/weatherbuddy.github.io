import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    // Diğer reducer'lar buraya eklenebiir.
  },
});

export default store;
