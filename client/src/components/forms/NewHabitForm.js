import axios from 'axios';
import React, { useContext, useState } from 'react';

import { SaveHabitButton } from '../../styles/Button.styled';

import { LabelInputWrapper } from '../../styles/Wrappers.styled';
import HabitFormContext from '../../context/HabitFormContext';
import {
  TextInput,
  TextAreaInput,
  SelectOptionInput,
  NumberInput,
  ColorInput,
} from '../inputs';
import { CloseHabitFormButton } from '../buttons';
import AddNewHabitForm from './AddNewHabitForm';
import HabitFormLabel from '../labels/HabitFormLabel';
import { NewHabitFormStyled } from '../../styles/Form.styled';

function NewHabitForm({ getHabits }) {
  const { toggleHabitForm, showHabitForm } = useContext(HabitFormContext);

  const [habitTitle, setHabitTitle] = useState('');
  const [habitDescription, setHabitDescription] = useState('');
  const [habitFrequency, setHabitFrequency] = useState('');
  const [habitDuration, setHabitDuration] = useState('');
  const [checkboxColor, setCheckboxColor] = useState('#ff0000');

  async function saveNewHabit(e) {
    console.log('submitted');
    e.preventDefault();

    try {
      const habitData = {
        habitTitle: habitTitle,
        habitDescription: habitDescription,
        habitFrequency: habitFrequency,
        habitDuration: habitDuration,
        checkboxColor: checkboxColor,
      };
      console.log(habitData);
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
  // On Submit form not working
  //   !!!! Have to put submit function within form file
  return (
    <NewHabitFormStyled toggle={showHabitForm}>
      <form onSubmit={saveNewHabit}>
        <CloseHabitFormButton toggleHabitForm={toggleHabitForm} />
        <h2>New Habit</h2>

        <LabelInputWrapper>
          <HabitFormLabel>New Habit Title:</HabitFormLabel>
          <TextInput
            placeholder="Running"
            setState={setHabitTitle}
            //  onChange={e => {
            //    setHabitTitle(e.target.value);
            //  }}
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
            setState={setHabitDescription}
            value={habitDescription}
          />
        </LabelInputWrapper>

        <LabelInputWrapper>
          <HabitFormLabel>
            How often will you complete your new habit?
          </HabitFormLabel>
          <SelectOptionInput
            setState={setHabitFrequency}
            value={habitFrequency}
          />
        </LabelInputWrapper>

        <LabelInputWrapper>
          <HabitFormLabel>
            How many minutes does your habit take?
          </HabitFormLabel>
          <NumberInput
            min="1"
            max="180"
            setState={setHabitDuration}
            value={habitDuration}
          />
        </LabelInputWrapper>

        <HabitFormLabel>
          Choose a color for your checkboxes:{' '}
          <ColorInput setState={setCheckboxColor} value={checkboxColor} />
        </HabitFormLabel>

        <button type="submit">Save Habit</button>
      </form>
    </NewHabitFormStyled>
  );
}

export default NewHabitForm;
