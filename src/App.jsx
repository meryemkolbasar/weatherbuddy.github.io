import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import DescriptionCard from './components/DescriptionCard';
import KoalaAdvice from './components/KoalaAdvice';
import Background from './assets/images/background.png'

const App = () => {
  const [weatherCondition, setWeatherCondition] = useState('Clear'); // Varsayılan hava durumu

  return (
    <Router>
      <div style={{ 
        backgroundImage: `url(${Background})`, 
        backgroundSize: 'cover',   // Resmi tam ekran yapar
        backgroundPosition: 'center', // Resmi ortalar
        backgroundAttachment: 'fixed', // Arka planın sayfayı kaydırırken sabit durmasını sağlar
        height: '100vh',  // Sayfa yüksekliğinin %100'ünü kaplar
        width: '100vw',   // Sayfa genişliğinin %100'ünü kaplar
        overflow: 'hidden' // Taşmayı engeller
      }}>
        <Routes>
          <Route path="/" element={<DescriptionCard />} />
          <Route path="/koala" element={<KoalaAdvice condition={weatherCondition} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
