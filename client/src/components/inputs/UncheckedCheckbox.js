import React from 'react';
import axios from 'axios';

function UncheckedCheckbox({ value, habitTitle }) {
  async function addToCheckboxesChecked(checkboxValue) {
    try {
      const checkboxData = {
        habitTitle: habitTitle,
        checkboxValue: checkboxValue,
      };
      await axios.put('http://localhost:5020/habit/addCheckbox', checkboxData);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <input
      type="checkbox"
      value={value}
      onChange={e => addToCheckboxesChecked(+e.target.value)}
    />
  );
}

export default UncheckedCheckbox;
