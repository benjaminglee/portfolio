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
  .toast-position {
    top: 65px !important;
    border:2px solid ${({ theme, mode }) =>
      mode ? theme.colors.orange : theme.colors.yellow};
    font-family: 'Montserrat', sans-serif;
    font-weight:400;
    font-size:18px;
    background-color: ${({ theme, mode }) =>
      mode ? theme.colors.darkRed : theme.colors.blue};
    color:${({ theme, mode }) =>
      mode ? theme.colors.pale : theme.colors.white};
    border-radius:7px;
  }
  h2 {
    color: ${({ mode, theme }) => (mode ? theme.colors.pale : '#ffe33b')};
    font-weight: 500;
    font-size: 2.3rem;
  }
  h3 {
    color: ${({ theme, mode }) => (mode ? theme.colors.lightOrange : 'white')};
    font-weight: 500;
    font-size: 1.75rem;
  }
  html{
    scroll-behavior:smooth;
  }
`;
