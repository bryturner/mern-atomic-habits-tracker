import React, { useContext } from 'react';
import HabitFormContext from '../context/HabitFormContext';
import { OverlayStyled } from '../styles/Overlay.styled';

function Overlay() {
  const { showOverlay } = useContext(HabitFormContext);
  return <OverlayStyled toggle={showOverlay} />;
}

export default Overlay;
