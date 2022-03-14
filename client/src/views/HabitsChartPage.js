import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import NewHabitForm from "../components/forms/NewHabitForm";

import HabitsList from "../components/lists/HabitsList";
import UserContext from "../context/UserContext";

function HabitsChartPage() {
  const [userFirstName, setUserFirstName] = useState("");
  const [habits, setHabits] = useState([]);

  const { userData, getUserData } = useContext(UserContext);

  //   async function getUserFirstName() {
  //     await getUserData();
  //     const { firstName } = userData;
  //     setUserFirstName(firstName);
  //   }

  //   async function getUserHabits() {
  //     await getUserData();
  //     const { habits } = userData;
  //     setHabits(habits);
  //   }

  async function getUserInfo() {
    try {
      await getUserData();

      const { habits, firstName } = userData;

      console.log(habits, firstName);

      setUserFirstName(firstName);
      setHabits(habits);
    } catch (err) {
      console.error(err);
    }
  }

  //   useEffect(() => {
  //     getUserFirstName();
  //   }, []);

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      {/* <h2>Welcome {userFirstName}</h2> */}
      {/* <NewHabitForm />
      <HabitsList /> */}
    </div>
  );
}

export default HabitsChartPage;
