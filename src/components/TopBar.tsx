import Card from './Card';
import FlexRow from './blocks/FlexRow';
import LogoIcon from '../icons/logo.svg';
import NotificationIcon from '../icons/notification.svg';
import React from 'react';
import SearchIcon from '../icons/search.svg';
import styled from 'styled-components';

const BackofficeText = styled.span`
  color: #a5abb7;
  margin-top: 5px;
  ::after {
    font-family: Roboto;
    font-size: 10px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-transform: uppercase;
    content: 'backoffice';
  }
`;

const TopBarContainer = styled(Card)`
  padding: 20px 30px;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  grid-area: topbar;
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