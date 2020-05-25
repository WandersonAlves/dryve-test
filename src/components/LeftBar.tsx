import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import AvatarImg from '../assets/avatar.jpg';
import CarUnselectedIcon from '../icons/car-unselected.svg';
import HomeIcon from '../icons/ic-home.svg';
import PersonIcon from '../icons/ic-person.svg';
import React from 'react';
import styled from "styled-components";
import TriangleIcon from '../icons/ic-vector-triangle.svg';
import WalletIcon from '../icons/wallet.svg';

const LeftBarContainer = styled.div`
  box-shadow: 1px 0 0 0 #e0e0e0;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: leftbar;
  grid-row: 1/3;
`;

const Icon = styled.img`
  object-fit: contain;
  margin-bottom: 28px;
`;

const LeftBar = () => (
  <LeftBarContainer>
    <Avatar src={AvatarImg} />
    <Link to="/home">
      <Icon src={HomeIcon} />
    </Link>
    <Link to="people">
      <Icon src={PersonIcon} />
    </Link>
    <Icon src={CarUnselectedIcon} />
    <Icon src={TriangleIcon} />
    <Icon src={WalletIcon} />
  </LeftBarContainer>
);

export default LeftBar;