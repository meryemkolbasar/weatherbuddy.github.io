import React, { useState } from 'react';
import styles from './WeatherCard.module.scss'; // WeatherCard için stil dosyası

const WeatherCard = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      try {
        const response = await fetch(`https://api.weatherapi.com/forecast.json?key=YOUR_API_KEY&q=${city}&days=1`);
        if (!response.ok) {
          throw new Error('City not found');
        }
        const data = await response.json();
        setWeather(data.current); // Örnek olarak current hava durumu verisi
        setCity('');
      } catch (error) {
        console.error('Error fetching weather:', error.message);
        // Hata durumunda kullanıcıya bir mesaj gösterebilirsiniz
      }
    }
  };

  return (
    <div className={styles['weather-card']}>
      <div className={styles['input-section']}>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        {city.trim() === '' && (
          <p className={styles['instruction-text']}>Enter a city to see weather details</p>
        )}
      </div>
      {weather && (
        <div className={styles['weather-details']}>
          <div className={styles['background']}></div>
          <div className={styles['content']}>
            <p className={styles['temperature']}>Temperature: {weather.temp_c}°C</p>
            <p className={styles['condition']}>Condition: {weather.condition.text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
