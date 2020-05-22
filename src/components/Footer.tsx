import FlexColumn from "./blocks/FlexColumn";
import FlexRow from './blocks/FlexRow';
import React from 'react';
import Separator from "./Separator";
import styled from "styled-components";

const Text = styled.span`
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: #616161;
`;

const SubText = styled.span`
  opacity: 0.5;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: right;
  color: #6b6c6f;
`;

const Footer = () => (
  <FlexColumn style={{ gridArea: 'footer'}}>
    <Separator />
    <span style={{marginBottom: 20}}/>
    <FlexRow style={{justifyContent: 'space-between'}}>
      <Text>2020 © Dryve Tecnologia Ltda.</Text>
      <SubText>Versão 1.0.1</SubText>
    </FlexRow>
  </FlexColumn>
);

export default Footer;