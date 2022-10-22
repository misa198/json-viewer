import { createGlobalStyle } from 'styled-components';
import { BACKGROUND_COLOR, TEXT_COLOR } from '../common/themes';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins';
  }

  *::-webkit-scrollbar {
    display: none;
  }

  * {
    scrollbar-width: none;
  }

  * {
    -ms-overflow-style: none;
  }

  body {
    background: ${(props) => BACKGROUND_COLOR[props.theme]};
    min-height: 100vh;
    min-width: 100vw;
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: all 200ms ease-in-out;
    background-color: rgba(0, 0, 0, 0.7) !important;
    z-index: 100;
  }
  
  .ReactModal__Overlay--after-open {
    opacity: 1;
  }
  
  .ReactModal__Overlay--before-close {
    opacity: 0;
  }

  .ReactModal__Content {
    background: ${(props) => BACKGROUND_COLOR[props.theme]} !important;
    color: ${(props) => TEXT_COLOR[props.theme]} !important;
    border: none !important;
    border-radius: 4px !important;
    width: 500px !important;
    height: 400px !important;
    transform: translate(-50%, -50%) !important;
    top: 50% !important;
    left: 50% !important;
  }
`;
