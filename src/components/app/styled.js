import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  html {
    font-style: normal;
    font-weight: 400;
    font-size: ${props => props.theme.fontSizeDefault};
    line-height: 24px;
    font-family: ${props => props.theme.ffRoboto};
    color: ${props => props.theme.colorText};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // оптимизация выравнивания шрифта относительно центра строки
    text-rendering: optimizeLegibility;
    // если по прежнему есть проблемы с выравниванием
    // https://transfonter.org/ - включите настройку https://prnt.sc/12rnt6g и переконвертируйте шрифт
  }

  body {
    width: 100%;
    height: 100%;

    background-color: ${props => props.theme.colorPageBackground};
  }

  a {
    color: ${props => props.theme.colorText};
    text-decoration: none;
  }

  img,
  video {
    display: block;
    max-width: 100%;
    height: auto;
  }

  textarea {
    resize: none;
  }

  // chrome autofill background removal
  // если на проекте у инпутов используются разные цвета фонов\текста -
  // удалите это из глобала и используйте локально с нужными цветами
  // rgba не подойдет, сконвертируйте цвет в hex без прозрачности
  // если в стилях уже используется box-shadow есть другое решение -
  // задать к списку транзишенов 'background-color 10000000s ease-out'
  input:-webkit-autofill {
    box-shadow: inset 0 0 0 1000px ${props => props.theme.colorWhite};

    -webkit-text-fill-color: ${props => props.theme.colorText};
  }

  // firefox placeholder \ invalid fix + ios bdrs
  input,
  textarea {
    border-radius: 0;

    &::placeholder {
      opacity: 1;
    }

    &:invalid {
      box-shadow: none;
    }
  }

  select {
    border-radius: 0;
  }

  // ie11 X removal
  input {
    &::-ms-clear,
    &::-ms-reveal {
      display: none;
    }
  }

  // chrome search X removal
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    appearance: none;
  }

  // input[number] arrows removal
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin: 0;

    appearance: none;
  }

  input[type="number"] {
    appearance: textfield;
  }

  // ios button \ inputs reset
  select,
  textarea,
  input:matches([type="email"],
    [type="number"],
    [type="password"],
    [type="search"],
    [type="tel"],
    [type="text"],
    [type="url"]) {
    appearance: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    appearance: none;
  }
`;