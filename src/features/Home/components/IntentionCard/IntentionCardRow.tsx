import CommonCardText from '../../../../components/CommonCardText';
import React from 'react';
import Separator from '../../../../components/Separator';
import styled from 'styled-components';

const ImageFrame = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 4px;
  border: solid 1px #e0e0e0;
`;

const IntentionCardRowContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 14px;
`;

interface IIntentionCardRowProps {
  readonly isLast?: boolean;
  readonly text: string;
  readonly value: string;
  readonly img: string;
}

const IntentionCardRow = ({ isLast, text, value, img }: IIntentionCardRowProps) => (
  <>
    <IntentionCardRowContainer>
      <ImageFrame src={img}/>
      <CommonCardText style={{ flexGrow: 1, marginLeft: 14 }}>{text}</CommonCardText>
      <CommonCardText style={{ marginRight: 28 }}>{value}</CommonCardText>
    </IntentionCardRowContainer>
    {isLast ? null : <Separator />}
  </>
);

export default IntentionCardRow;
