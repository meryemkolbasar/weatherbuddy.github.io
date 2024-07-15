import React, { useState } from 'react';
import styles from './WeatherCard.module.scss'; // Stil dosyası için import

const WeatherCard = () => {
  const [stadt, setStadt] = useState('');
  const [wetter, setWetter] = useState(null);
  const [fehler, setFehler] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (stadt.trim() !== '') {
      try {
        const response = await fetch(`https://meryemkolbasar.github.io/weather-buddy/v1/forecast?latitude=52.52&longitude=13.41&current=weather_code,precipitation,rain,snowfall&timezone=Europe%2FBerlin&past_days=92`);
        if (!response.ok) {
          throw new Error('Stadt nicht gefunden');
        }
        const data = await response.json();
        setWetter(data.current); // Hava durumu verilerini güncelle
        setStadt('');
        setFehler(false);
      } catch (error) {
        console.error('Fehler beim Abrufen des Wetters:', error.message);
        setFehler(true);
      }
    }
  };

  return (
    <div className={styles['weather-card']}>
      <div className={styles['input-section']}>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Geben Sie den Stadtnamen ein"
            value={stadt}
            onChange={(e) => setStadt(e.target.value)}
          />
          <button type="submit">Suchen</button>
        </form>
        {stadt.trim() === '' && (
          <p className={styles['instruction-text']}>Geben Sie eine Stadt ein, um Wetterdetails zu sehen</p>
        )}
        {fehler && (
          <p className={styles['error-text']}>Fehler beim Abrufen des Wetters. Bitte überprüfen Sie den Stadtnamen und versuchen Sie es erneut.</p>
        )}
      </div>
      {wetter && (
        <div className={styles['weather-details']}>
          <div className={styles['background']}></div>
          <div className={styles['content']}>
            <p className={styles['temperature']}>Temperatur: {wetter.temp_c}°C</p>
            <p className={styles['condition']}>Wetterlage: {wetter.condition.text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
