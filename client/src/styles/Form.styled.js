import styled from 'styled-components';

export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: flex-start;
`;

export const RegisterFormStyled = styled(FormStyled)``;
export const LoginFormStyled = styled(FormStyled)``;

export const NewHabitFormStyled = styled(FormStyled)`
  /* display: ${props => (props.toggle ? 'block' : 'none')}; */
  padding: 2.4rem 6.4rem 3.6rem 6.4rem;
  border: 3px solid black;
  border-radius: 11px;
  background-color: paleturquoise;
  position: relative;

  /* input,
  textarea,
  select {
    font-family: inherit;
    border-radius: 5px;
    border: 2px solid black;
    padding: 0.4rem 0.6rem;

    &.colorPicker {
      width: 3rem;
      height: 3rem;
      padding: 0 !important;
      margin-bottom: 2rem;
    }
  }

  textarea {
    width: 100% !important;
    resize: none;
  } */
`;

export const EditHabitFormStyled = styled(FormStyled)`
  display: ${props => (props.toggle ? 'block' : 'none')};
  max-width: 60rem;
`;
