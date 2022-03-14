import React from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import { AuthContextProvider } from "./context/AuthContext";
import Router from "./routes/Router";
import GlobalStyle from "./styles/Global.styled";

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
