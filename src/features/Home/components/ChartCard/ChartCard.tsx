import Card from '../../../../components/Card';
import CommonCardText from '../../../../components/CommonCardText';
import React from 'react';
import styled from 'styled-components';

const ChartCardContainer = styled(Card)`
  grid-area: chart;
`;

const ChartCard = () => (
  <ChartCardContainer>
    <CommonCardText style={{ marginBottom: 30 }}>Preços - Dryve x KBB</CommonCardText>
  </ChartCardContainer>
);

export default ChartCard;
