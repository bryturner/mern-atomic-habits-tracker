import React from "react";
import axios from "axios";

function DeleteHabitButton({ habitTitle, getHabits }) {
  async function deleteHabit() {
    try {
      await axios.delete("http://localhost:5015/user/deleteHabit", {
        data: { habitTitle: habitTitle },
      });
      getHabits();
    } catch (err) {
      console.error(err);
    }
  }
  return <button onClick={deleteHabit}>Delete</button>;
}

export default DeleteHabitButton;
