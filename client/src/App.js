import React from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import { AuthContextProvider } from "./context/AuthContext";
import Router from "./routes/Router";
import { UserContextProvider } from "./context/UserContext";

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <AuthContextProvider>
        <UserContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </UserContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
