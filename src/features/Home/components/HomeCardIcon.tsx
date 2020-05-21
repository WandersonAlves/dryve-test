import React from 'react';
import styled from "styled-components";

interface IHomeCardIconProps {
  icon: string;
  alt?: string;
}

const HomeCardIconContainer = styled.div`
  width: 64px;
  height: 64px;
  background-color: #f3f7ff;
  display: flex;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
`;

const Img = styled.img`
  width: 24px;
  height: 23px;
  object-fit: contain;
`;

const HomeCardIcon = ({icon, alt}: IHomeCardIconProps) => {
  return (
    <HomeCardIconContainer>
      <Img src={icon} alt={alt} />
    </HomeCardIconContainer>
  );
}

export default HomeCardIcon;