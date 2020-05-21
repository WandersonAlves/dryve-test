import Card from './Card';
import FlexRow from './blocks/FlexRow';
import LogoIcon from '../icons/logo.svg';
import NotificationIcon from '../icons/notification.svg';
import React from 'react';
import SearchIcon from '../icons/search.svg';
import styled from 'styled-components';

const BackofficeText = styled.span`
  font-family: Roboto;
  font-size: 10px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-transform: uppercase;
  color: #a5abb7;
  margin-top: 10px;
  ::after {
    content: 'backoffice';
  }
`;

const TopBarContainer = styled(Card)`
  width: 100%;
  padding: 20px 30px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const TopBar = () => (
  <TopBarContainer>
    <FlexRow style={{ alignItems:"center"}}>
      <img src={LogoIcon} alt="Dryve"/>
      <BackofficeText />
    </FlexRow>
    <FlexRow>
      <img src={SearchIcon}/>
      <span style={{ marginRight: 17 }}/>
      <img src={NotificationIcon}/>
    </FlexRow>
  </TopBarContainer>
)

export default TopBar;