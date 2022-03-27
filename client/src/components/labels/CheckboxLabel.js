import React from 'react';
import { CheckboxLabelStyled } from '../../styles/Labels.styled';

function CheckboxLabel(props) {
  return <CheckboxLabelStyled>{props.children}</CheckboxLabelStyled>;
}

export default CheckboxLabel;
