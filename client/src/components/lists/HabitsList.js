import React from "react";

function HabitsList({ habits }) {
  function renderHabits() {
    return habits.map((habit, i) => {
      return (
        <li key={i}>
          <p>
            {habit.habitTitle},{habit.habitDescription},{habit.habitFrequency},
            {habit.habitDuration} minutes,{habit.checkboxColor}
          </p>
        </li>
      );
    });
  }

  return (
    <div>
      <ul>{renderHabits()}</ul>
    </div>
  );
}

export default HabitsList;
