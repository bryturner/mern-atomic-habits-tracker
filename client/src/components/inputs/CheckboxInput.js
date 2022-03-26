import React, { useState } from 'react';
import axios from 'axios';

function CheckboxInput({ value, checked, habitTitle, getHabits }) {
  const [boxChecked, setBoxChecked] = useState(false);

  async function updateCheckboxesChecked(habitTitle, checkboxIndexNumber) {
    const checkboxData = {
      habitTitle: habitTitle,
      checkboxesChecked: checkboxIndexNumber,
    };
    await axios.put('http://localhost:5020/habit/checkboxes', checkboxData);
  }

  return <input type="checkbox" value={value} checked={checked} />;
  //   function removeCheckbox(checkboxesChecked, checkboxValueIndexNum) {
  //     return checkboxesChecked.filter(checkbox => {
  //       return checkbox !== checkboxValueIndexNum;
  //     });
  //   }

  //   async function updateCheckboxesChecked(
  //     habitTitle,
  //     checkboxesChecked,
  //     checkboxValueIndexNum,
  //     boxChecked
  //   ) {
  //     try {
  //       if (boxChecked === true) {
  //         const newCheckboxesCheckedArr = removeCheckbox(
  //           checkboxesChecked,
  //           checkboxValueIndexNum
  //         );
  //         //   checkboxesChecked.pop(checkboxValueIndexNum);
  //         console.log(checkboxesChecked, newCheckboxesCheckedArr);
  //         const checkboxData = {
  //           habitTitle: habitTitle,
  //           checkboxesChecked: newCheckboxesCheckedArr,
  //         };
  //         console.log(checkboxData);
  //         await axios.put('http://localhost:5020/habit/checkboxes', checkboxData);

  //         getHabits();
  //       }

  //       if (boxChecked === false) {
  //         checkboxesChecked.push(checkboxValueIndexNum);

  //         const checkboxData = {
  //           habitTitle: habitTitle,
  //           checkboxesChecked: checkboxesChecked,
  //         };
  //         //   console.log(checkboxData);

  //         await axios.put('http://localhost:5020/habit/checkboxes', checkboxData);
  //         getHabits();
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  //   return (
  //     <>
  //       {checkboxesChecked.includes(value) === true && (
  //         <input
  //           type="checkbox"
  //           value={value}
  //           checked={!boxChecked}
  //           onChange={e => {
  //             const checkboxValueIndexNum = +e.target.value;

  //             setBoxChecked(boxChecked);

  //             updateCheckboxesChecked(
  //               habitTitle,
  //               checkboxesChecked,
  //               checkboxValueIndexNum,
  //               boxChecked
  //             );
  //           }}
  //         />
  //       )}
  //       {checkboxesChecked.includes(value) === false && (
  //         <input
  //           type="checkbox"
  //           value={value}
  //           checked={boxChecked}
  //           onChange={e => {
  //             const checkboxValueIndexNum = +e.target.value;

  //             setBoxChecked(!boxChecked);

  //             updateCheckboxesChecked(
  //               habitTitle,
  //               checkboxesChecked,
  //               checkboxValueIndexNum,
  //               boxChecked
  //             );
  //           }}
  //         />
  //       )}
  //     </>
  //   );
}

export default CheckboxInput;

export function CheckboxChecked({ value, habitTitle, getHabits }) {
  async function updateCheckboxesChecked(habitTitle, checkboxIndexNumber) {
    const checkboxData = {
      habitTitle: habitTitle,
      checkboxesChecked: checkboxIndexNumber,
    };
    await axios.put('http://localhost:5020/habit/checkboxes', checkboxData);
  }

  return <input type="checkbox" value={value} defaultChecked />;
}

export function CheckboxNotChecked({ value, habitTitle, getHabits }) {
  async function updateCheckboxesChecked(habitTitle, checkboxIndexNumber) {
    const checkboxData = {
      habitTitle: habitTitle,
      checkboxesChecked: checkboxIndexNumber,
    };
    await axios.put('http://localhost:5020/habit/checkboxes', checkboxData);
  }

  return <input type="checkbox" value={value} />;
}
