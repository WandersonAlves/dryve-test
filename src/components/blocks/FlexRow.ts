import styled from 'styled-components';

interface IFlexRowProps {
  readonly alignItems?: boolean;
  readonly justifyItems?: boolean;
  readonly disableMobileColumn?: boolean;
}

const FlexRow = styled.div<IFlexRowProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: ${props => (props.alignItems ? 'center' : 'unset')};
  justify-content: ${props => (props.justifyItems ? 'center' : 'unset')};
`;

export default FlexRow;
