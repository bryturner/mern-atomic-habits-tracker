import React from 'react';
import axios from 'axios';

function UncheckedCheckbox({ value, habitTitle, getHabits }) {
  async function removeFromCheckboxesChecked(checkboxValue) {
    try {
      const checkboxData = {
        habitTitle: habitTitle,
        checkboxValue: checkboxValue,
      };
      await axios.put(
        'http://localhost:5020/habit/removeCheckbox',
        checkboxData
      );
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <input
      type="checkbox"
      value={value}
      onChange={e => removeFromCheckboxesChecked(e.target.value)}
    />
  );
}

export default UncheckedCheckbox;
