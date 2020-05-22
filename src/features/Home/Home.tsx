import CarIcon from '../../icons/car-selected.svg';
import ChartCard from './components/ChartCard/ChartCard';
import DeviceIcon from '../../icons/device.svg';
import HomeCard from './components/HomeCard/HomeCard';
import IntentionCard from './components/IntentionCard/IntentionCard';
import LastAvailationPane from './components/LastAvailationPane/LastAvailationPane';
import MoneyIcon from '../../icons/money.svg';
import React from 'react';

const Home = () => (
  <>
    <HomeCard
      style={{ gridArea: 'card1' }}
      percentage={36}
      title="Avaliações hoje"
      value="29"
      isPositive
      icon={CarIcon}
      text="Essa semana"
    />
    <HomeCard
      style={{ gridArea: 'card2' }}
      percentage={4}
      title="carros publicados"
      isPositive
      value="397"
      icon={DeviceIcon}
      text="este mês"
    />
    <HomeCard
      style={{ gridArea: 'card3' }}
      percentage={36}
      title="ticket médio do estoque"
      value={'R$ 42.567'}
      icon={MoneyIcon}
      text="este mês"
    />
    <IntentionCard style={{ gridArea: 'buyIntention' }} />
    <LastAvailationPane />
    <ChartCard />
  </>
);

export default Home;