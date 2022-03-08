import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "../views/RegisterPage";
import LoginPage from "../views/LoginPage";
import LogoutPage from "../views/LogoutPage";
import HabitsChartPage from "../views/HabitsChartPage";
import AuthContext from "../context/AuthContext";

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
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
  );
}

export default Router;
