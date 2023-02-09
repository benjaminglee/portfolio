import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
    font-family: 'Montserrat', sans-serif;
    color:black;
    font-weight: 500;
    margin: 0px 0px 0px 0px; 
    padding: 0px 0px 0px 0px; 
    font-size: 20px;
    background-color: ${({ mode }) => (mode ? '#2C0A2D' : '#46ade2')};
    /* background: ${({ mode }) =>
      mode
        ? 'linear-gradient(#2C0A2D,#441828)'
        : 'linear-gradient(#46ade2, #cce7f9)'}; */
    overflow-x: hidden;
    position:relative;
}

.anchor {
    display: block;
    position: relative;
    top: -10vh;
    visibility: hidden;
  }
  .switch{
    position:fixed;
    z-index:10;

  }
  h2 {
    color: ${({ mode, theme }) => (mode ? theme.colors.pale : '#ffe33b')};
    font-weight: 500;
    font-size: 2.5rem;
  }
  h3 {
    color: ${({ theme, mode }) =>
      mode ? theme.colors.lightOrange : '#8ce172'};
    font-weight: 500;
    font-size: 1.75rem;
  }
  html{
    scroll-behavior:smooth;
  }
`;
