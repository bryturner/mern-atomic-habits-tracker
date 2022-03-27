import React from 'react';
import axios from 'axios';
import { CheckboxStyled } from '../../styles/Inputs.style';

function UncheckedCheckbox({ value, habitTitle, checkboxColor }) {
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
    <CheckboxStyled
      checkboxColor={checkboxColor}
      type="checkbox"
      value={value}
      onChange={e => addToCheckboxesChecked(+e.target.value)}
    />
  );
}

export default UncheckedCheckbox;
