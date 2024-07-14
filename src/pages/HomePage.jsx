import React from 'react';
import ThemeSwitcher from '../components/ThemeSwitcher';
import LanguageSwitcher from '../components/LanguageSwitcher';
import SearchBar from '../components/SearchBar';
import WeatherDetails from '../components/WeatherDetails';

const HomePage = () => {
  return (
    <div>
      <ThemeSwitcher />
      <LanguageSwitcher />
      <SearchBar />
      <WeatherDetails />
    </div>
  );
};

export default HomePage;
