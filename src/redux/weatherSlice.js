// redux/weatherSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentWeather: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCurrentWeather: (state, action) => {
      state.currentWeather = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setCurrentWeather, setLoading, setError } = weatherSlice.actions;

export default weatherSlice.reducer;
