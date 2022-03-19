import styled from 'styled-components';

export const ButtonStyled = styled.button`
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  background: none;
  padding: 1rem 2rem;
`;

export const CloseButtonStyled = styled(ButtonStyled)`
  padding: 0.2rem !important;
  font-size: 1.8rem !important;
  border: none;
  position: absolute;
  right: 12px;
  top: 8px;
  color: #444;
  transition: all 0.2s;

  &:hover {
    color: #000;
  }
`;

export const SaveHabitButton = styled(ButtonStyled)``;
