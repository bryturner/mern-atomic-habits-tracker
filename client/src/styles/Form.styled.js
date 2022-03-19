import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: flex-start;

  label {
    display: block;
  }
`;

export const RegisterFormStyled = styled(FormStyled)``;
export const LoginFormStyled = styled(FormStyled)``;

export const NewHabitFormStyled = styled(FormStyled)`
  display: ${props => (props.toggle ? 'block' : 'none')};
  max-width: 60rem;
  padding: 2.4rem 6.4rem 3.6rem 6.4rem;
  border: 3px solid black;
  border-radius: 11px;
  background-color: paleturquoise;
`;

export const EditHabitFormStyled = styled(FormStyled)`
  display: ${props => (props.toggle ? 'block' : 'none')};
  max-width: 60rem;
`;
