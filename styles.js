import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

:root { 
    --color-white: #eaeaea;
    --color-black: #121212;
    --color-main: rgb(255, 74, 17); 
}

  body {
    margin: 0;
    font-family: system-ui;
  }

`;
