import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import { AuthContextProvider } from './context/AuthContext';
import Router from './routes/Router';
import GlobalStyle from './styles/Global.styled';
import { HabitFormContextProvider } from './context/HabitFormContext';

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthContextProvider>
        <HabitFormContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </HabitFormContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
