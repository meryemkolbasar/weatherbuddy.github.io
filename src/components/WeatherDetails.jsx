import React from 'react';
import { useSelector } from 'react-redux';

const WeatherDetails = () => {
  const weather = useSelector((state) => state.weather.data);

  if (!weather) {
    return null;
  }

  return (
    <div>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Condition: {weather.condition}</p>
    </div>
  );
};

export default WeatherDetails;
