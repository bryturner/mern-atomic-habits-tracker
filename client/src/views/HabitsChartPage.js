import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import NewHabitForm from '../components/forms/NewHabitForm';
import { AddHabitButton } from '../components/buttons';
import {
  TableHead,
  Table,
  TableBody,
  TableHeaderRow,
} from '../components/table';
import HabitListItem from '../components/lists/HabitsListItem';
import { NewHabitFormContainer } from '../styles/Containers.styled';

function HabitsChartPage() {
  const [firstName, setFirstName] = useState('');
  const [habits, setHabits] = useState([]);
  const [daysInCurMonth, setDaysInCurMonth] = useState(15);

  async function getFirstName() {
    try {
      const firstNameResponse = await axios.get(
        'http://localhost:5020/user/firstName'
      );
      setFirstName(firstNameResponse.data);
    } catch (err) {
      console.error(err);
    }
  }

  async function getHabits() {
    try {
      const habitsResponse = await axios.get(
        'http://localhost:5020/habit/habitsList'
      );
      setHabits(habitsResponse.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getFirstName();
  }, []);

  useEffect(() => {
    getHabits();
  }, []);

  return (
    <>
      <h2>Welcome {firstName}</h2>

      <Table>
        <TableHead>
          <TableHeaderRow daysInCurMonth={daysInCurMonth} />
        </TableHead>
        <TableBody>
          <HabitListItem
            daysInCurMonth={daysInCurMonth}
            habits={habits}
            getHabits={getHabits}
          />
        </TableBody>
      </Table>
      <AddHabitButton />

      <NewHabitFormContainer>
        <NewHabitForm getHabits={getHabits} />
      </NewHabitFormContainer>
    </>
  );
}

export default HabitsChartPage;
