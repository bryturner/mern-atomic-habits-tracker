import React, { useState } from 'react';
import axios from 'axios';

// Error handling if there is already a number in the array
function CheckboxInput({
  value,
  habitTitle,
  checkboxesChecked,
  //   boxChecked,
  //   setBoxChecked,
  getHabits,
}) {
  const [boxChecked, setBoxChecked] = useState(false);

  console.log(value, habitTitle, checkboxesChecked, getHabits);
  async function updateCheckboxesChecked(
    habitTitle,
    checkboxesChecked,
    checkboxValueIndexNum,
    boxChecked
  ) {
    try {
      if (boxChecked === true) {
        checkboxesChecked.pop(checkboxValueIndexNum);

        const checkboxData = {
          habitTitle: habitTitle,
          checkboxesChecked: checkboxesChecked,
        };

        await axios.put('http://localhost:5020/habit/checkboxes', checkboxData);

        getHabits();
      }

      if (boxChecked === false) {
        checkboxesChecked.push(checkboxValueIndexNum);

        const checkboxData = {
          habitTitle: habitTitle,
          checkboxesChecked: checkboxesChecked,
        };

        await axios.put('http://localhost:5020/habit/checkboxes', checkboxData);
        getHabits();
      }
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <>
      {checkboxesChecked.includes(value) === true && (
        <input
          type="checkbox"
          value={value}
          checked={!boxChecked}
          onChange={e => {
            const checkboxValueIndexNum = +e.target.value;

            setBoxChecked(boxChecked);

            updateCheckboxesChecked(
              habitTitle,
              checkboxesChecked,
              checkboxValueIndexNum,
              boxChecked
            );
          }}
        />
      )}
      {checkboxesChecked.includes(value) === false && (
        <input
          type="checkbox"
          value={value}
          checked={boxChecked}
          onChange={e => {
            const checkboxValueIndexNum = +e.target.value;

            setBoxChecked(!boxChecked);

            updateCheckboxesChecked(
              habitTitle,
              checkboxesChecked,
              checkboxValueIndexNum,
              boxChecked
            );
          }}
        />
      )}
    </>
  );
}

export default CheckboxInput;
