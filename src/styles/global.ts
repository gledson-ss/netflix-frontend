import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, body{
    width: 100%;
    height: 100%;
    max-width: 100vw;
    max-height: 100vh;
    background-color: ${(props) => props.theme.colors.background};
    font-size: .75vw;
    scroll-behavior: smooth;
    margin: 0;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  svg{ 
    padding: 0;
    margin: 0;
  }
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
`;
