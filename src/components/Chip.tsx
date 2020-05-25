import React from 'react';
import styled from 'styled-components';
import UpperText from './UpperText';

const ChipContainer = styled.div`
  padding: 5px 10px;
  width: fit-content;
  border-radius: 13px;
`;

interface IChipProps {
  style?: React.CSSProperties;
  textColor?: string;
  text: string;
}

const Chip = ({ style, text, textColor }: IChipProps) => (
  <ChipContainer style={style}>
    <UpperText style={{ textTransform: 'unset', color: textColor }}>{text}</UpperText>
  </ChipContainer>
);

export default Chip;