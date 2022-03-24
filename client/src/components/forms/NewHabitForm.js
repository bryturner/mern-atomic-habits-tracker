import axios from 'axios';
import React, { useContext, useState } from 'react';

import {
  ButtonStyled,
  CloseButtonStyled,
  SaveHabitButton,
} from '../../styles/Button.styled';
import { NewHabitFormStyled } from '../../styles/Form.styled';
import { LabelInputWrapper } from '../../styles/Wrappers.styled';
import { NewHabitFormContainer } from '../../styles/Containers.styled.js';
import HabitFormContext from '../../context/HabitFormContext';
import TextInput from '../inputs/TextInput';

function NewHabitForm({ getHabits }) {
  const { toggleHabitForm, showHabitForm } = useContext(HabitFormContext);

  const [habitTitle, setHabitTitle] = useState('');
  const [habitDescription, setHabitDescription] = useState('');
  const [habitFrequency, setHabitFrequency] = useState('');
  const [habitDuration, setHabitDuration] = useState('');
  const [checkboxColor, setCheckboxColor] = useState('#ff0000');

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

      await axios.put('http://localhost:5020/habit/newHabit', habitData);

      getHabits();
      toggleHabitForm();
      setHabitTitle('');
      setHabitDescription('');
      setHabitFrequency('');
      setHabitDuration('');
      setCheckboxColor('#ff0000');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <NewHabitFormContainer>
        <NewHabitFormStyled toggle={showHabitForm} onSubmit={saveNewHabit}>
          <CloseButtonStyled type="button" onClick={toggleHabitForm}>
            X
          </CloseButtonStyled>
          <h2>New Habit</h2>
          <LabelInputWrapper>
            <label>New Habit Title:</label>
            <TextInput
              placeholder="Running"
              onChange={e => {
                setHabitTitle(e.target.value);
              }}
              value={habitTitle}
              autoFocus
            />
            {/* <input
              type="text"
              placeholder="Running"
              onChange={e => {
                setHabitTitle(e.target.value);
              }}
              value={habitTitle}
              autoFocus
              required
            /> */}
          </LabelInputWrapper>

          <LabelInputWrapper>
            <label htmlFor="habit-description">Describe your new habit</label>
            <textarea
              id="habit-description"
              placeholder="I will run 3 miles per week"
              rows="3"
              cols="33"
              onChange={e => {
                setHabitDescription(e.target.value);
              }}
              value={habitDescription}
              required
            />
          </LabelInputWrapper>
          <LabelInputWrapper>
            <label>How often will you complete your new habit?</label>
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
          </LabelInputWrapper>
          <LabelInputWrapper>
            <label>How many minutes does your habit take?</label>
            <div>
              <input
                type="number"
                min="1"
                max="180"
                onChange={e => {
                  setHabitDuration(e.target.value);
                }}
                value={habitDuration}
                required
              />
              <span>minutes</span>
            </div>
          </LabelInputWrapper>

          <label>
            Choose a color for your checkboxes:{' '}
            <input
              className="colorPicker"
              type="color"
              onChange={e => {
                setCheckboxColor(e.target.value);
              }}
              value={checkboxColor}
              required
            />
          </label>

          <SaveHabitButton type="submit">Save Habit</SaveHabitButton>
        </NewHabitFormStyled>
      </NewHabitFormContainer>
    </>
  );
}

export default NewHabitForm;
