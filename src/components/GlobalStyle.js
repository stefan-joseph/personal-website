import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --backgroundColor: ${(props) => props.theme.backgroundColor};
    --textColor: ${(props) => props.theme.textColor};
    --animationColor:${(props) => props.theme.secondaryColor};
  }
  `;
