import Card from '../../../../components/Card';
import CommonCardText from '../../../../components/CommonCardText';
import HB20Icon from '../../../../icons/hb20.png';
import IntentionCardRow from './IntentionCardRow';
import JeepIcon from '../../../../icons/jeep.png';
import NissanIcon from '../../../../icons/nissan.png';
import OnixIcon from '../../../../icons/onix.png';
import React from 'react';
import styled from 'styled-components';
import TCrossIcon from '../../../../icons/tcross.png';

interface IIntentionCardProps {
  readonly style?: React.CSSProperties;
}

const IntentionCardContainer = styled(Card)`
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const IntentionCard = ({ style }: IIntentionCardProps) => (
  <IntentionCardContainer style={style}>
    <CommonCardText style={{ marginBottom: 30 }}>Top intenções de compra</CommonCardText>
    <IntentionCardRow img={HB20Icon} text="HB20" value="197" />
    <IntentionCardRow img={OnixIcon} text="Onix" value="183" />
    <IntentionCardRow img={JeepIcon} text="Renegade" value="125" />
    <IntentionCardRow img={TCrossIcon} text="T-Cross" value="109" />
    <IntentionCardRow img={NissanIcon} text="Kicks" value="86" isLast />
  </IntentionCardContainer>
);

export default IntentionCard;