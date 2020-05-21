import { PositiveColor, NegativeColor } from "../../../colors";
import styled from "styled-components";

interface IPercentageTextProps {
  readonly isPositive?: boolean;
}
const HomePercentage = styled.span<IPercentageTextProps>`
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.4px;
  color: ${props => (props.isPositive ? PositiveColor : NegativeColor)};
`;

export default HomePercentage;
