import React from 'react';
import styled from "styled-components";

const AvatarPic = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 38px 0;
  background-size: cover;
`;

const Container = styled.div`
  width: 64px;
  height: 64px;
  border: solid 3px #0065ff;
  background-color: white;
  border-radius: 50%;
  margin: 38px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IAvatarProps {
  readonly src: string;
}
const Avatar = ({ src }: IAvatarProps) => (
  <Container>
    <AvatarPic src={src}/>
  </Container>
);

export default Avatar;
