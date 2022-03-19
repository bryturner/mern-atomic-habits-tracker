import styled from 'styled-components';

export const LogoutWrapperStyled = styled.div`
  text-align: center;
  font-size: 2rem;
`;

export const HabitFormButtonsWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export const LabelInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-bottom: 1.6rem;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.gap};
`;
