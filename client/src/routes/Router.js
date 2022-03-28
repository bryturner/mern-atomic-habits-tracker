import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import AuthContext from '../context/AuthContext';

import Navbar from '../layout/Navbar';
import RegisterPage from '../views/RegisterPage';
import LoginPage from '../views/LoginPage';
import LogoutPage from '../views/LogoutPage';
import HabitsChartPage from '../views/HabitsChartPage';

import { BodyContainer } from '../styles/Containers.styled';
import Overlay from '../components/overlays/Overlay';

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <>
      <BodyContainer>
        <Navbar />
        <Routes>
          {loggedIn === false && (
            <>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/" element={<LoginPage />} />
              <Route path="/logout" element={<LogoutPage />} />
            </>
          )}
          {loggedIn === true && (
            <>
              <Route path="/home" element={<HabitsChartPage />} />
            </>
          )}
        </Routes>
      </BodyContainer>
      <Overlay />
    </>
  );
}

export default Router;
