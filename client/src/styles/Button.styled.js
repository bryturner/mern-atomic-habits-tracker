import styled from "styled-components";

export const ButtonStyled = styled.button`
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  background: none;
  padding: 1rem 2rem;
`;

export const AddHabitButtonStyled = styled(ButtonStyled)`
  display: ${(props) => (props.toggle ? "block" : "none")};
`;
