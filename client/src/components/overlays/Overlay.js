import React, { useContext, useEffect, useRef } from 'react';
import HabitFormContext from '../../context/HabitFormContext';
import { OverlayStyled } from '../../styles/Overlay.styled';

function Overlay() {
  const { showOverlay, toggleHabitForm } = useContext(HabitFormContext);

  const ref = useRef();

  const escCloseModal = e => {
    if (e.key === 'Escape' && showOverlay === false) return;

    if (e.key === 'Escape' && showOverlay === true) {
      toggleHabitForm();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', escCloseModal);

    return () => {
      window.removeEventListener('keydown', escCloseModal);
    };
  }, [escCloseModal]);

  useEffect(() => {
    ref.current.addEventListener('click', toggleHabitForm);
  }, []);

  return <OverlayStyled ref={ref} toggle={showOverlay} />;
}

export default Overlay;
