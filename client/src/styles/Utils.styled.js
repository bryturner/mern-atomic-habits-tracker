import styled from 'styled-components';

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.gapRem};
`;

export const FlexRow = styled.div`
  display: flex;
  gap: ${props => props.gapRem};
`;
