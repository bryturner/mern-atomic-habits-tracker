import React, { createContext, useState } from 'react';

const HabitFormContext = createContext();

export function HabitFormContextProvider(props) {
  const [showHabitForm, setShowHabitForm] = useState(false);

  const [showOverlay, setShowOverlay] = useState(false);

  function toggleHabitForm() {
    setShowHabitForm(!showHabitForm);
    setShowOverlay(!showOverlay);
  }

  return (
    <HabitFormContext.Provider
      value={{ toggleHabitForm, showHabitForm, showOverlay }}
    >
      {props.children}
    </HabitFormContext.Provider>
  );
}

export default HabitFormContext;
