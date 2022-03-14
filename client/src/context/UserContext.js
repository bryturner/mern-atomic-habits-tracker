import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

export function UserContextProvider(props) {
  const [userData, setUserData] = useState();

  async function getUserData() {
    const userDataResponse = await axios.get(
      "http://localhost:5015/user/userData"
    );

    setUserData(userDataResponse.data);
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, getUserData }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
