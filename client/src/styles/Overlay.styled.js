import styled from 'styled-components';

export const OverlayStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  backdrop-filter: blur(3px);
  z-index: 5;
`;
