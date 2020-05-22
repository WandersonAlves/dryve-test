import Card from '../../../../components/Card';
import FlexColumn from '../../../../components/blocks/FlexColumn';
import FlexRow from '../../../../components/blocks/FlexRow';
import HomeCardIcon from './HomeCardIcon';
import HomeCardPercentageRow from './HomeCardPercentageRow';
import React from 'react';
import styled from 'styled-components';
import UpperText from '../../../../components/UpperText';

interface IHomeCardProps {
  title: string;
  value: string;
  percentage: number;
  isPositive?: boolean;
  text: string;
  icon: string;
  style?: React.CSSProperties;
}

const Value = styled.span`
  font-size: 34px;
  font-family: Inter;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.06;
  letter-spacing: normal;
  color: rgba(0, 0, 0, 0.87);
`;

const HomeCardContainer = styled(FlexRow)`
  justify-content: space-between;
`;

const HomeCard = ({ title, value, percentage, text, isPositive, icon, style }: IHomeCardProps) => {
  return (
    <Card style={style}>
      <HomeCardContainer alignItems>
        <FlexColumn>
          <UpperText>{title}</UpperText>
          <span style={{ marginBottom: 6 }}></span>
          <Value>{value}</Value>
          <span style={{ marginBottom: 8 }}></span>
          <HomeCardPercentageRow isPositive={isPositive} percentage={percentage} text={text} />
        </FlexColumn>
        <HomeCardIcon icon={icon} />
      </HomeCardContainer>
    </Card>
  );
};

export default HomeCard;
