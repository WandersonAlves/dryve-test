import ArrowDown from '../../../icons/arrow-down.svg';
import ArrowUp from '../../../icons/arrow-up.svg';
import FlexRow from '../../../components/blocks/FlexRow';
import HomePercentage from './HomePercentage';
import React from 'react';
import styled from 'styled-components';

interface IHomeCardPercentageRowProps {
  readonly isPositive?: boolean;
  readonly percentage: number;
  readonly text: string;
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
`;

const HomeCardPercentageRow = ({isPositive, percentage, text}: IHomeCardPercentageRowProps) => {
  return (
    <FlexRow alignItems>
      <Icon src={isPositive ? ArrowUp : ArrowDown}/>
      <HomePercentage isPositive={isPositive}>{percentage}%</HomePercentage>
      <PercentageText>{text}</PercentageText>
    </FlexRow>
  );
};

export default HomeCardPercentageRow;
