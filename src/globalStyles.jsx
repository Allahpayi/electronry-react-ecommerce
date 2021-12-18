import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";

const variables = css`
  :root {
    --color-main: white;
    --color-main2: #f8f8f8;
    --color-red: #ef6454;
    --color-black: #0b0335;
    --color-black2: #3c3c3c;
    --link-color: #007bff;
    --border-color: #d2d2d2;
    --overlay: rgba(35, 35, 35, 0.8);
    --font-arimo: "Arimo", sans-serif;
    --font-prompt: "Prompt", sans-serif;
    --font-dm-sans: "DM Sans", sans-serif;
  }
`;

const GlobalStyle = createGlobalStyle`
${variables};
    * {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }
    html{
      font-size:16px
    }
    body{
      font-family:var(--font-prompt);
      overflow-x: hidden;
    }
    button,
    input,
    textarea{
        border:0;
        outline: none;
      cursor: pointer;
    }
    ul{
      list-style:none;
    }
    a{
      text-decoration: none;
      color:var(--color-white);
    }
    i{
      cursor: pointer;
    }
    @media (max-width:762px){
      html{
      font-size:13px
      }
    }
`;

export default GlobalStyle;
