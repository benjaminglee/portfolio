import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
    font-family: 'Montserrat', sans-serif;
    color:black;
    font-weight: 500;
    margin: 0px 0px 0px 0px; 
    padding: 0px 0px 0px 0px; 
    font-size: 20px;
    background-color: #2C0A2D;
    overflow-x: hidden;
    position:relative;
}
.anchor {
    display: block;
    position: relative;
    top: -10vh;
    visibility: hidden;
  }
`;
