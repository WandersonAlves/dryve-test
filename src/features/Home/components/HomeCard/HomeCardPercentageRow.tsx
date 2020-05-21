import { PositiveColor, NegativeColor } from '../../../../colors';
import ArrowDown from '../../../../icons/arrow-down.svg';
import ArrowUp from '../../../../icons/arrow-up.svg';
import FlexRow from '../../../../components/blocks/FlexRow';
import React from 'react';
import styled from 'styled-components';

interface IHomeCardPercentageRowProps {
  readonly isPositive?: boolean;
  readonly percentage: number;
  readonly text: string;
}

interface IPercentageTextProps {
  readonly isPositive?: boolean;
}
const PercentageText = styled.span`
  opacity: 0.5;
  font-family: Inter;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
  text-transform: lowercase;
  color: rgba(0, 0, 0, 0.87);
  margin-left: 5px;
`;

const Icon = styled.img`
  object-fit: contain;
  position: absolute;
  bottom: -4px;
  left: -6px;
`;


const HomePercentage = styled.span<IPercentageTextProps>`
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.4px;
  margin-left: 16px;
  color: ${props => (props.isPositive ? PositiveColor : NegativeColor)};
`;

const HomeCardPercentageRow = ({isPositive, percentage, text}: IHomeCardPercentageRowProps) => {
  return (
    <FlexRow style={{alignItems: 'baseline', position: 'relative'}}>
      <Icon src={isPositive ? ArrowUp : ArrowDown}/>
      <HomePercentage isPositive={isPositive}>{percentage}%</HomePercentage>
      <PercentageText>{text}</PercentageText>
    </FlexRow>
  );
};

export default HomeCardPercentageRow;
