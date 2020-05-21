import React from 'react';
import Separator from '../../../../components/Separator';
import styled from 'styled-components';

const ImageFrame = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 4px;
  border: solid 1px #e0e0e0;
`;

const Text = styled.span`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 0.1px;
  color: rgba(0, 0, 0, 0.87);
  font-family: Inter;
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
      <Text style={{ flexGrow: 1, marginLeft: 14 }}>{text}</Text>
      <Text style={{ marginRight: 28 }}>{value}</Text>
    </IntentionCardRowContainer>
    {isLast ? null : <Separator />}
  </>
);

export default IntentionCardRow;
