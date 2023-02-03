import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
    font-family: 'Montserrat', sans-serif;
    //color:#C3073F;
    color:black;
    font-weight: 500;
    margin: 0px 0px 0px 0px; 
    padding: 0px 0px 0px 0px; 
    font-size: 20px;
    background-image: linear-gradient(white, #65c1e6);
}
html{scroll-behavior:smooth; scroll-snap-type: y proximity; scroll-padding:67px;}
`;
