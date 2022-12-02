import { css } from '@emotion/react';

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: SCDream3, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }

  html {
    font-size: 16px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  p {
    margin: 0;
    margin-bottom: 0;
  }
  ul,
  ol {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
  }
  button {
    border: none;
    background-color: transparent;
    border-radius: 10px;
    cursor: pointer;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
  @font-face {
    font-family: 'SCDream2';
    src: url('/fonts/SCDream2.otf');
  }
  @font-face {
    font-family: 'SCDream3';
    src: url('/fonts/SCDream3.otf');
  }
  @font-face {
    font-family: 'SCDream4';
    src: url('/fonts/SCDream4.otf');
  }
  @font-face {
    font-family: 'SCDream5';
    src: url('/fonts/SCDream5.otf');
  }
`;
