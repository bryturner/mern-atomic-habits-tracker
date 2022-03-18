import axios from "axios";
import React, { useState } from "react";

import { AddHabitButtonStyled, ButtonStyled } from "../../styles/Button.styled";
import { NewHabitFormStyled } from "../../styles/Form.styled";
import { NewHabitButtonsWrapperStyled } from "../../styles/Wrappers.styled";

function UpdateHabitForm({ editHabit }) {
  const [habitTitle, setHabitTitle] = useState();
  const [habitDescription, setHabitDescription] = useState("");
  const [habitFrequency, setHabitFrequency] = useState("");
  const [habitDuration, setHabitDuration] = useState("");
  const [checkboxColor, setCheckboxColor] = useState("#ff0000");
  const [showNewHabitForm, setShowNewHabitForm] = useState(false);
  const [showAddHabitButton, setShowAddHabitButton] = useState(true);

  return <div></div>;
}

export default UpdateHabitForm;

//   const [editHabit, setEditHabit] = useState({});

//   async function getEditHabit(habitTitle) {
//     try {
//       const editHabitResponse = await axios.get(
//         "http://localhost:5015/user/editHabit",
//         {
//           params: {
//             habitTitle: habitTitle,
//           },
//         }
//       );
//       console.log(editHabitResponse.data);
//       setEditHabit(editHabitResponse.data);
//     } catch (err) {
//       console.error(err);
//     }
//   }

//  {/* <EditHabitButton
//             habitTitle={habit.habitTitle}
//             getEditHabit={getEditHabit}
//           /> */}
