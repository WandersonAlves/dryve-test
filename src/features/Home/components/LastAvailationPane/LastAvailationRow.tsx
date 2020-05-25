import { ICar } from '../../../../interfaces';
import Chip from '../../../../components/Chip';
import FlexColumn from '../../../../components/blocks/FlexColumn';
import FlexRow from '../../../../components/blocks/FlexRow';
import React from 'react';
import Separator from '../../../../components/Separator';
import styled from 'styled-components';
import UpperText from '../../../../components/UpperText';

const LastAvailationRowContainer = styled(FlexRow)`
  padding: 15px 20px;
  margin-top: 14px;
`;

const Image = styled.img`
  width: 80px;
  height: 60px;
  border-radius: 4px;
  border: solid 1px #e0e0e0;
  margin-right: 10px;
`;

const TextBold = styled.span`
  font-family: Inter;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-transform: uppercase;
  color: #1e2c4c;
`;

const MinimumValue = styled(UpperText)`
  color: #a5abb7;
  opacity: 1;
`;
interface ILastAvailationRowProps {
  readonly isLast?: boolean;
  readonly car: ICar;
}

const LastAvailationRow = ({ isLast, car }: ILastAvailationRowProps) => {
  const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  return (
    <>
      <LastAvailationRowContainer>
        <FlexRow style={{ width: '45%' }}>
          <Image src={car.image} />
          <FlexColumn style={{ lineHeight: 1, justifyContent: 'center' }}>
            <TextBold>{car.name}</TextBold>
            <UpperText>{car.version_name}</UpperText>
            <UpperText>
              {car.manufacturing_year} - {car.fuel_type}
            </UpperText>
            <UpperText>
              {car.transmission_type} - {car.mileage} km
            </UpperText>
          </FlexColumn>
        </FlexRow>
        <FlexColumn style={{ width: '25%' }}>
          <UpperText>anúncio</UpperText>
          <TextBold>{formatCurrency(car.ad_selling_price)}</TextBold>
          <UpperText>mínimo aceito</UpperText>
          <MinimumValue>{formatCurrency(115.560)}</MinimumValue>
        </FlexColumn>
        <FlexColumn style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Chip style={{ backgroundColor: '#f3f7ff', marginBottom: 18 }} text="Aguardando precisificação" />
          <MinimumValue>18/04/2020 às 14:35</MinimumValue>
        </FlexColumn>
      </LastAvailationRowContainer>
      {isLast ? null : <Separator />}
    </>
  );
};

export default LastAvailationRow;
