import React from 'react';
import DescriptionCard from '../components/DescriptionCard';
import WeatherCard from '../components/WeatherCard';
import KoalaAdvice from '../components/KoalaAdvice';
const HomePage = () => {
  return (
    <div>
      <DescriptionCard />
      <WeatherCard />
      <KoalaAdvice />
    </div>
  );
};

export default HomePage;
