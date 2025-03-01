import React from 'react';
import DescriptionCard from './components/DescriptionCard';
import KoalaAdvice from './components/KoalaAdvice';
import './App.css'; 

const App = () => {
  return (
    <div className="app app-background">
         <DescriptionCard />
         <KoalaAdvice />
    </div>
  );
};

export default App;
