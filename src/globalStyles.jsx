import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";

const variables = css`
  :root {
    --color-main: white;
    --color-main2: #f8f8f8;
    --color-red: #ef6454;
    --color-black: #232323;
    --link-color: #007bff;
    --overlay: rgba(35, 35, 35, 0.8);
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
      font-family:var(--font-dm-sans);
      overflow-x: hidden;
      background:red;
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
