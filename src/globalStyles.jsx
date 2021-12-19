import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";

const variables = css`
  :root {
    --color-main: white;
    --color-main2: #f8f8f8;
    --color-red: #ef6454;
    --light-green: #10ffda;
    --color-black: #0b0335;
    --color-black2: #3c3c3c;
    --color-gray: #777777;
    --link-color: #007bff;
    --border-color: #d2d2d2;
    --shadow-md: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    --shadow-lg: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
      /* overflow-x: hidden; */
    }
    button,
    input,
    textarea{
        border:0;
        outline: none;
      cursor: pointer;
    }
    img{
      max-width:100%;
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
