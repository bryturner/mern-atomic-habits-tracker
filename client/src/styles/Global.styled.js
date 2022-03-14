import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; }

html {
  font-size: 62.5%; }

body {
  font-family: sans-serif;
  font-size: 1.6rem;
  line-height: 1.6;}
  
`;

export default GlobalStyle;
