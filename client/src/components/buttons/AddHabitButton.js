import React, { useContext } from 'react';
import HabitFormContext from '../../context/HabitFormContext';

function AddHabitButton() {
  const { toggleHabitForm } = useContext(HabitFormContext);

  return <button onClick={toggleHabitForm}>Add Habit</button>;
}

export default AddHabitButton;
