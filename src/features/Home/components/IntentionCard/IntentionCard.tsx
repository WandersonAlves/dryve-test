import Card from '../../../../components/Card';
import IntentionCardRow from './IntentionCardRow';
import React from 'react';
import styled from 'styled-components';

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
    <IntentionCardRow text="HB20" value="17"/>
    <IntentionCardRow text="HB20" value="17"/>
    <IntentionCardRow text="HB20" value="17"/>
    <IntentionCardRow text="HB20" value="17"/>
    <IntentionCardRow text="HB20" value="17" isLast/>
  </IntentionCardContainer>
);

export default IntentionCard;