import axios from 'axios';
import React, { useState } from 'react';

import { AddHabitButtonStyled, ButtonStyled } from '../../styles/Button.styled';
import { NewHabitFormStyled } from '../../styles/Form.styled';
import { NewHabitButtonsWrapperStyled } from '../../styles/Wrappers.styled';
import { NewHabitFormContainerStyled } from '../../styles/Containers.styled.js';

function NewHabitForm({ getHabits }) {
  const [habitTitle, setHabitTitle] = useState('');
  const [habitDescription, setHabitDescription] = useState('');
  const [habitFrequency, setHabitFrequency] = useState('');
  const [habitDuration, setHabitDuration] = useState('');
  const [checkboxColor, setCheckboxColor] = useState('#ff0000');
  const [showNewHabitForm, setShowNewHabitForm] = useState(false);
  const [showAddHabitButton, setShowAddHabitButton] = useState(true);

  async function saveNewHabit(e) {
    e.preventDefault();
    try {
      const habitData = {
        habitTitle: habitTitle,
        habitDescription: habitDescription,
        habitFrequency: habitFrequency,
        habitDuration: habitDuration,
        checkboxColor: checkboxColor,
      };

      await axios.put('http://localhost:5015/user/newHabit', habitData);

      getHabits();
      toggleNewHabitForm();
      setHabitTitle('');
      setHabitDescription('');
      setHabitFrequency('');
      setHabitDuration('');
      setCheckboxColor('');
    } catch (err) {
      console.error(err);
    }
  }

  function toggleNewHabitForm() {
    setShowNewHabitForm(!showNewHabitForm);
    setShowAddHabitButton(!showAddHabitButton);
  }

  return (
    <>
      <NewHabitFormContainerStyled>
        <NewHabitFormStyled toggle={showNewHabitForm} onSubmit={saveNewHabit}>
          <h2>New Habit</h2>
          <label>
            New Habit Title:
            <input
              type="text"
              placeholder="Running"
              onChange={e => {
                setHabitTitle(e.target.value);
              }}
              value={habitTitle}
              autoFocus
              required
            />
          </label>
          <div>
            <label htmlFor="habit-description">Describe your new habit</label>
            <textarea
              id="habit-description"
              placeholder="I will run 3 miles per week"
              rows="5"
              cols="33"
              onChange={e => {
                setHabitDescription(e.target.value);
              }}
              value={habitDescription}
              required
            />
          </div>

          <label>
            How often will you complete your new habit?
            <select
              onChange={e => {
                setHabitFrequency(e.target.value);
              }}
              value={habitFrequency}
              required
            >
              <option value="">Select one</option>
              <option value="Once per day">Once per day</option>
              <option value="Every other day">Every other day</option>
              <option value="2 or 3 per week">2 to 3 per week</option>
              <option value="Once per week">Once per week</option>
            </select>
          </label>

          <label>
            How many minutes does your habit take?
            <input
              type="number"
              min="5"
              max="180"
              step="5"
              onChange={e => {
                setHabitDuration(e.target.value);
              }}
              value={habitDuration}
              required
            />
            minutes
          </label>
          <label>
            Choose a color for your habit checkboxes:{' '}
            <input
              type="color"
              onChange={e => {
                setCheckboxColor(e.target.value);
              }}
              value={checkboxColor}
              required
            />
          </label>
          <NewHabitButtonsWrapperStyled>
            <ButtonStyled type="submit">Save Habit</ButtonStyled>
            <ButtonStyled type="button" onClick={toggleNewHabitForm}>
              Close
            </ButtonStyled>
          </NewHabitButtonsWrapperStyled>
        </NewHabitFormStyled>
      </NewHabitFormContainerStyled>
      <AddHabitButtonStyled
        onClick={toggleNewHabitForm}
        toggle={showAddHabitButton}
      >
        Add new habit
      </AddHabitButtonStyled>
    </>
  );
}

export default NewHabitForm;
