import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; 
import { ThemeProvider, useTheme } from '../src/components/ThemeContext'; 
import HomePage from './pages/HomePage';
import '../src/assets/styles/main.scss'; 

const AppWrapper = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <HomePage />
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppWrapper />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
