import styled from 'styled-components';

export const ListStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ListItemStyled = styled.li`
  display: flex;
  gap: 2.4rem;
`;

export const HabitListItemStyled = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
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
