import CarIcon from '../../icons/car-selected.svg';
import DeviceIcon from '../../icons/device.svg';
import HomeCard from './components/HomeCard/HomeCard';
import IntentionCard from './components/IntentionCard/IntentionCard';
import MoneyIcon from '../../icons/money.svg';
import React from 'react';
import styled from 'styled-components';

const HomeCardWrapper = styled(HomeCard)`
  grid-column: col-start / span 4;
`;

const Home = () => (
  <>
    <HomeCard
      style={{ gridColumn: 'col-start / span 4', gridRow: 'row-start / span 2' }}
      percentage={36}
      title="Avaliações hoje"
      value="29"
      isPositive
      icon={CarIcon}
      text="Essa semana"
    />
    <HomeCard
      style={{ gridColumn: 'col-start 5 / span 4', gridRow: 'row-start / span 2' }}
      percentage={4}
      title="carros publicados"
      isPositive
      value="397"
      icon={DeviceIcon}
      text="este mês"
    />
    <HomeCard
      style={{ gridColumn: 'col-start 9 / span 4', gridRow: 'row-start / span 2' }}
      percentage={36}
      title="ticket médio do estoque"
      value={'R$ 42.567'}
      icon={MoneyIcon}
      text="este mês"
    />
    <IntentionCard style={{ gridRow: 'row-start 3 / span 7', gridColumn: 'col-start 9 / span 4' }} />
  </>
);

export default Home;