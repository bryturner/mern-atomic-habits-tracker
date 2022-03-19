import styled from 'styled-components';

export const BodyContainer = styled.div`
  margin: 0 auto;
  max-width: 100rem;
  padding-top: 2rem;
  position: relative;
`;

export const FormContainer = styled.div`
  margin: 0 auto;
`;

export const NewHabitFormContainer = styled(FormContainer)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -10%);
  z-index: 10;
`;
