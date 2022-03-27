import React from 'react';
import axios from 'axios';
import { CheckboxStyled } from '../../styles/Inputs.style';

function CheckedCheckbox({ value, habitTitle, checkboxColor }) {
  async function removeFromCheckboxesChecked(checkboxValue) {
    const checkboxData = {
      habitTitle: habitTitle,
      checkboxValue: checkboxValue,
    };
    await axios.put('http://localhost:5020/habit/removeCheckbox', checkboxData);
  }

  return (
    <CheckboxStyled
      checkboxColor={checkboxColor}
      type="checkbox"
      value={value}
      defaultChecked
      onChange={e => removeFromCheckboxesChecked(+e.target.value)}
    />
  );
}

export default CheckedCheckbox;
