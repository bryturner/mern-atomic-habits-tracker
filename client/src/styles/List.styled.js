import styled from "styled-components";

export const ListStyled = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ListItemStyled = styled.li`
  display: flex;
  gap: 1.2rem;
  button {
    cursor: pointer;
  }
`;
