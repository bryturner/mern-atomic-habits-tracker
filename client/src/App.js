import React from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import { AuthContextProvider } from "./context/AuthContext";
import Router from "./routes/Router";

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
