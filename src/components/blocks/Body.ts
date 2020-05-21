import { BackgroundColor } from '../../colors';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow: hidden;
    font-family: 'Open Sans', sans-serif;
    background-color: ${BackgroundColor}
  }
`;

export default GlobalStyle;
