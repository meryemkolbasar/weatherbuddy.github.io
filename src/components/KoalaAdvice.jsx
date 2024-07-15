import React, { useEffect, useState } from 'react';
import KoalaVideo from '../assets/videos/KoalaVideo.mp4'; // KoalaVideo dosyasının doğru yolda olduğundan emin olun
import styles from './KoalaAdvice.module.scss'; // Sass dosyası için stil import edildiği varsayılıyor

const KoalaAdvice = ({ condition }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const advice = getAdvice(condition);
  const fullText = advice.join(' ');

  useEffect(() => {
    setDisplayedText('');
    setTextIndex(0);
    setCharIndex(0);
  }, [condition]);

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 30); // Harf yazma süresi (100 ms)
      return () => clearTimeout(timeout);
    }
  }, [charIndex, fullText]);

  return (
    <div className={styles['koala-advice-container']}>
      <div className={styles['koala-video-container']}>
        <video src={KoalaVideo} autoPlay loop muted />
      </div>
      <div className={styles['speech-bubble']}>
        <p className={styles['typewriter']}>Koala Buddy sagt:</p>
        <p className={styles['advice-text']}>{displayedText}</p>
      </div>
    </div>
  );
};

const getAdvice = (condition) => {
  switch (condition) {
    case 'Clear':
      return [
        'Koala Buddy freut sich auf deine Stadtauswahl! 🌞',
        'Bitte wähle eine Stadt, um die Wetterdetails zu sehen.'
      ];
    case 'Sommer':
      return [
        'Es ist ein klarer Tag! Genieße die Sonne 🌞',
        'Vergiss nicht, Sonnencreme mit LSF 50 aufzutragen, um deine Haut zu schützen! 🧴',
        'Ein Spaziergang im Park oder ein Picknick wäre eine großartige Idee! 🌳🧺'
      ];
    case 'Clouds':
      return [
        'Es ist bewölkt draußen! Perfekt für einen gemütlichen Tag drinnen ☁️',
        'Wie wäre es mit einem guten Buch oder einem Film? 📚🎬',
        'Denke daran, eine Tasse Tee oder Kaffee zu genießen, während du drinnen bist! ☕️'
      ];
    case 'Rain':
      return [
        'Regenwetter! Vergiss nicht deinen Regenschirm ☔️',
        'Ein guter Tag, um sich gemütlich zu machen und etwas Entspannendes zu tun. 🛋️',
        'Wie wäre es mit einem neuen Rezept in der Küche zu experimentieren? 🍳🍲'
      ];
    case 'Snow':
      return [
        'Es schneit! Zeit, um heiße Schokolade zu machen! ❄️☕️',
        'Bleib drinnen und genieße die Winterlandschaft von deinem Fenster aus. 🏔️❄️',
        'Vielleicht ist es auch Zeit, einen Film-Marathon zu machen! 🎥🍿'
      ];
    default:
      return [
        'Genieße das Wetter, egal wie es draußen ist! 🌈',
        'Denke daran, dich entsprechend anzuziehen und die Natur zu erleben. 🌼🌳',
        'Mache das Beste aus deinem Tag! 💪'
      ];
  }
};

export default KoalaAdvice;
