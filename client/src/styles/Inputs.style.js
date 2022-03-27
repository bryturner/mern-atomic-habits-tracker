import styled from 'styled-components';

export const CheckboxStyled = styled.input`
  appearance: none;
  background-color: #fff;
  margin: 0;
  width: 2rem;
  height: 2rem;
  border: 0.2rem solid #000;
  border-radius: 100px;
  display: grid;
  place-content: center;
  cursor: pointer;

  &::before {
    content: '';
    width: 1rem;
    height: 1rem;
    transform: scale(0);
    transition: all 0.4s ease;
    box-shadow: inset 1rem 1rem ${props => props.checkboxColor};
    border-radius: 100px;
  }

  &:checked::before {
    transform: scale(1);
  }
`;
