import axios from 'axios';
import React, { useContext, useState } from 'react';

import { SaveHabitButton } from '../../styles/Button.styled';

import { LabelInputWrapper } from '../../styles/Wrappers.styled';
import HabitFormContext from '../../context/HabitFormContext';
import { TextInput, TextAreaInput } from '../inputs';
import { CloseHabitFormButton } from '../buttons';
import AddNewHabitForm from './AddNewHabitForm';
import HabitFormLabel from '../labels/HabitFormLabel';

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
    <AddNewHabitForm toggle={showHabitForm} onSubmit={saveNewHabit}>
      <CloseHabitFormButton toggleHabitForm={toggleHabitForm} />
      <h2>New Habit</h2>
      <LabelInputWrapper>
        <HabitFormLabel>New Habit Title:</HabitFormLabel>
        <TextInput
          placeholder="Running"
          onChange={e => {
            setHabitTitle(e.target.value);
          }}
          value={habitTitle}
          autoFocus
        />
      </LabelInputWrapper>

      <LabelInputWrapper>
        <HabitFormLabel htmlFor="habit-description">
          Describe your new habit
        </HabitFormLabel>
        <TextAreaInput
          id="habit-description"
          placeholder="I will run 3 miles per week"
          onChange={e => {
            setHabitDescription(e.target.value);
          }}
          value={habitDescription}
        />
      </LabelInputWrapper>
      <LabelInputWrapper>
        <HabitFormLabel>
          How often will you complete your new habit?
        </HabitFormLabel>
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
        <HabitFormLabel>How many minutes does your habit take?</HabitFormLabel>
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

      <HabitFormLabel>
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
      </HabitFormLabel>

      <SaveHabitButton type="submit">Save Habit</SaveHabitButton>
    </AddNewHabitForm>
  );
}

export default NewHabitForm;
