import axios from "axios";
import React from "react";

function DeleteHabitButton({ habitTitle, getUserData }) {
  async function deleteHabit() {
    console.log(habitTitle);
    const deleteResponse = axios.delete("http://localhost:5015/user/habits", {
      data: { habitTitle: habitTitle },
    });
    await getUserData();
  }
  return <button onClick={deleteHabit}>Delete</button>;
}

export default DeleteHabitButton;
