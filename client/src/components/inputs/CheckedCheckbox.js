import React from 'react';
import axios from 'axios';

function CheckedCheckbox({ value, habitTitle }) {
  async function removeFromCheckboxesChecked(checkboxValue) {
    const checkboxData = {
      habitTitle: habitTitle,
      checkboxValue: checkboxValue,
    };
    await axios.put('http://localhost:5020/habit/removeCheckbox', checkboxData);
  }

  return (
    <input
      type="checkbox"
      value={value}
      defaultChecked
      onChange={e => removeFromCheckboxesChecked(+e.target.value)}
    />
  );
}

export default CheckedCheckbox;
