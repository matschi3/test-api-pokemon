import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

:root { 
    --color-white: #eaeaea;
    --color-black: #121212;
    --color-main: rgb(255, 74, 17); 
    
// Pkmn type colors
    --color-type-bug: #26de81;
    --color-type-dragon: #ffeaa7;
    --color-type-electric: #fed330;
    --color-type-fairy: #FF0069;
    --color-type-fighting: #30336b;
    --color-type-fire: #f0932b;
    --color-type-flying: #81ecec;
    --color-type-grass: #00b894;
    --color-type-ground: #EFB549;
    --color-type-ghost: #a55eea;
    --color-type-ice: #74b9ff;
    --color-type-normal: #95afc0;
    --color-type-poison: #6c5ce7;
    --color-type-psychic: #a29bfe;
    --color-type-rock: #2d3436;
    --color-type-water: #0190FF;
}

  body {
    margin: 0;
    font-family: system-ui;
  }

`;
