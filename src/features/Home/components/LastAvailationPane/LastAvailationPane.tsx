import { fetchVehicles } from '../../../../services';
import { ICar } from '../../../../interfaces';
import ArrowDownIcon from '../../../../icons/arrow.svg';
import ArrowMore from '../../../../icons/arrow-more.svg';
import Card from '../../../../components/Card';
import CommonCardText from '../../../../components/CommonCardText';
import FlexColumn from '../../../../components/blocks/FlexColumn';
import FlexRow from '../../../../components/blocks/FlexRow';
import LastAvailationRow from './LastAvailationRow';
import React, { useState, useEffect } from 'react';
import Separator from '../../../../components/Separator';
import styled from 'styled-components';
import UpperText from '../../../../components/UpperText';

const LastAvailationPaneContainer = styled(Card)`
  grid-area: pane;
  padding: 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
`;

const MoreText = styled.span`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 0.1px;
  text-align: right;
  color: #0065ff;
  cursor: pointer;
`;

const ItensContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 542px;
  overflow-x: hidden;
`;

const LastAvailationPane = () => {
  const [cars, setCars] = useState<ICar[]>([]);

  const getCars = async () => {
    try {
      const { data } = await fetchVehicles();
      setCars(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <LastAvailationPaneContainer>
      <FlexColumn>
        <Header>
          <CommonCardText>Últimas avaliações</CommonCardText>
          <FlexRow>
            <CommonCardText>Hoje</CommonCardText>
            <img src={ArrowDownIcon} style={{ opacity: 0.5 }} />
          </FlexRow>
        </Header>
        <FlexRow style={{ padding: '15px 20px' }}>
          <UpperText style={{ width: '45%' }}>dados do veiculo</UpperText>
          <UpperText style={{ width: '25%' }}>valor</UpperText>
          <UpperText>status</UpperText>
        </FlexRow>
        <Separator />
        <ItensContainer>
          {cars.map((c, index) => (
            <LastAvailationRow car={c} isLast={index === cars.length -1 ? true : false }/>
          ))}
        </ItensContainer>
        <Separator style={{ margin: 0 }} />
        <FlexRow style={{ justifyContent: 'flex-end', padding: '10px 15px' }}>
          <MoreText>Ver tudo</MoreText>
          <img src={ArrowMore} />
        </FlexRow>
      </FlexColumn>
    </LastAvailationPaneContainer>
  );
};

export default LastAvailationPane;
