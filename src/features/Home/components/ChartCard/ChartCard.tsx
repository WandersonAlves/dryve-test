import Card from '../../../../components/Card';
import CommonCardText from '../../../../components/CommonCardText';
import FlexRow from '../../../../components/blocks/FlexRow';
import HelpIcon from '../../../../icons/help.svg';
import React from 'react';
import styled from 'styled-components';

const ChartCardContainer = styled(Card)`
  grid-area: chart;
  display: flex;
  flex-direction: column;
`;

const ChartCard = () => (
  <ChartCardContainer>
    <FlexRow style={{ marginBottom: 30 }}>
      <CommonCardText style={{ marginRight: 6 }}>Preços - Dryve x KBB</CommonCardText>
      <img src={HelpIcon} />
    </FlexRow>
  </ChartCardContainer>
);

export default ChartCard;
