import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);

  // Checks token to see if user is logged in
  async function getLoggedIn() {
    const loggedInResponse = await axios.get(
      "http://localhost:5015/user/loggedIn"
    );

    setLoggedIn(loggedInResponse.data);
  }

  //   Runs once, empty array = no dependencies
  useEffect(() => {
    getLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
