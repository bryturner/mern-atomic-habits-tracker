import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NewHabitForm from '../components/forms/NewHabitForm';
import HabitsList from '../components/lists/HabitsList';

import AddHabitButton from '../components/buttons/AddHabitButton';
import {
  TableHead,
  TableRow,
  TableHeader,
  Table,
  TableBody,
} from '../components/table';
import HabitListItem from '../components/lists/HabitsListItem';
import { createNumArray } from '../utils/helpers';

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

  function renderHeaderNumbers(daysInCurMonth) {
    let tableHeaderNumbers = [];
    for (let i = 1; i <= daysInCurMonth; i++) {
      tableHeaderNumbers.push(i);
    }
    return tableHeaderNumbers.map((tableHeaderNumber, i) => {
      return <TableHeader key={i}>{tableHeaderNumber}</TableHeader>;
    });
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
          <TableRow>
            <TableHeader>Buttons</TableHeader>
            <TableHeader>Habit Title</TableHeader>
            {renderHeaderNumbers(daysInCurMonth)}
          </TableRow>
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
      <NewHabitForm getHabits={getHabits} />
    </>
  );
}

export default HabitsChartPage;
