import styled from "styled-components";

export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  text-align: center;

  form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`;

export const RegisterFormStyled = styled(FormStyled)``;
export const LoginFormStyled = styled(FormStyled)``;
export const NewHabitFormStyled = styled(FormStyled)``;
