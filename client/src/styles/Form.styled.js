import styled from "styled-components";

export const FormStyled = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    align-items: flex-start;
  }

  label {
    display: block;
  }
`;

export const RegisterFormStyled = styled(FormStyled)``;
export const LoginFormStyled = styled(FormStyled)``;

export const NewHabitFormStyled = styled(FormStyled)`
  display: ${(props) => (props.toggle ? "block" : "none")};
  max-width: 60rem;
`;

export const EditHabitFormStyled = styled(FormStyled)`
  display: ${(props) => (props.toggle ? "block" : "none")};
  max-width: 60rem;
`;
