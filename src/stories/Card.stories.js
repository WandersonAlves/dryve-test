import React from 'react';
import Card from '../components/Card';
import HomeCard from '../features/Home/components/HomeCard';
import CarIcon from '../icons/ic-directions-car.svg';
import Device from '../icons/device.svg';
import Money from '../icons/money.svg';

export default {
  title: 'Card',
  component: Card,
};

export const SampleCard = () => <Card />;
export const CardWithContent = () => (
  <Card>
    <p>Hi</p>
  </Card>
);
export const HomeCardWithPositive = () => (
  <HomeCard percentage={36} title="Avaliações hoje" value={29} isPositive icon={CarIcon} text="Essa semana" />
);
export const HomeCardWithNegative = () => (
  <HomeCard percentage={36} title="ticket médio do estoque" value={'R$ 42.567'} icon={Money} text="este mês" />
);
export const HomeCardWithDeviceIcon = () => (
  <HomeCard percentage={4} title="carros publicados" isPositive value={397} icon={Device} text="este mês" />
);
