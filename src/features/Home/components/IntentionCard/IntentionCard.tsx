import Card from '../../../../components/Card';
import HB20Icon from '../../../../icons/hb20.png';
import IntentionCardRow from './IntentionCardRow';
import JeepIcon from '../../../../icons/jeep.png';
import NissanIcon from '../../../../icons/nissan.png';
import OnixIcon from '../../../../icons/onix.png';
import React from 'react';
import styled from 'styled-components';
import TCrossIcon from '../../../../icons/tcross.png';

const IntentionCardContainer = styled(Card)`
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
`;

const Text = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 0.1px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 30px;
`;

const IntentionCard = () => (
  <IntentionCardContainer>
    <Text>Top intenções de compra</Text>
    <IntentionCardRow img={HB20Icon} text="HB20" value="197"/>
    <IntentionCardRow img={OnixIcon} text="Onix" value="183"/>
    <IntentionCardRow img={JeepIcon} text="Renegade" value="125"/>
    <IntentionCardRow img={TCrossIcon} text="T-Cross" value="109"/>
    <IntentionCardRow img={NissanIcon} text="Kicks" value="86" isLast/>
  </IntentionCardContainer>
);

export default IntentionCard;