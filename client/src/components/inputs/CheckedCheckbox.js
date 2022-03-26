import React from 'react';
import axios from 'axios';

function CheckedCheckbox({ value, habitTitle, getHabits }) {
  async function updateCheckboxesChecked(habitTitle, checkboxIndexNumber) {
    const checkboxData = {
      habitTitle: habitTitle,
      checkboxesChecked: checkboxIndexNumber,
    };
    await axios.put('http://localhost:5020/habit/checkboxes', checkboxData);
  }

  return <input type="checkbox" value={value} defaultChecked />;
}

export default CheckedCheckbox;
