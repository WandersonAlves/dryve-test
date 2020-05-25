import { BackgroundColor } from '../../colors';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow: hidden;
    font-family: 'Inter', sans-serif;
    background-color: ${BackgroundColor}
  }
  .percentageChart {
    font-family: Inter;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  font-weight: 600px;
  letter-spacing: normal;
  color: #a5abb7;
  }
  .apexcharts-legend-text{
    font-weight: 600 !important;
    font-family: 'Inter', sans-serif !important;
  }
  ::-webkit-scrollbar-track
  {
      border-radius: 10px;
      background-color: transparent;
  }

::-webkit-scrollbar
  {
      width: 8px;
      background-color: transparent;
  }

::-webkit-scrollbar-thumb
  {
    opacity: 0.1;
    border-radius: 10px;
    width: 4px;
    background-color: rgba(0,0,0,0.1);
  }

`;

export default GlobalStyle;
