import styled from 'styled-components';

export const ListStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ListItemStyled = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;
`;

export const HabitListItemStyled = styled.td`
  position: relative;
`;

export const HabitTitleStyled = styled.h3`
  font-size: 3rem;
`;

export const HabitDetailsStyled = styled.div`
  position: absolute;
  background-color: purple;
  display: none;

  ${HabitTitleStyled}:hover & {
    display: block;
  }

  ul {
    list-style: none;
  }
`;

export const HabitCheckBoxStyled = styled.input``;
