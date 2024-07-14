import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/weatherSlice';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const status = useSelector((state) => state.weather.status);

  const handleSearch = (e) => {
    e.preventDefault();
    // Şehir ismini latitude ve longitude değerlerine çevirecek bir fonksiyon ekle
    // dispatch(fetchWeather({ latitude, longitude }));
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
      {status === 'loading' && <p>Loading...</p>}
    </form>
  );
};

export default SearchBar;
