import React from "react";
import axios from "axios";

function EditHabitButton({ habitTitle, getEditHabit }) {
  function editHabit() {
    getEditHabit(habitTitle);
  }
  return <button onClick={editHabit}>Edit</button>;
}

export default EditHabitButton;
