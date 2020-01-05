import { css } from '@emotion/core';
import resetStyles from './reset';
import * as VARIABLES from './variables';

export default css`
  @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding:400,700&display=swap');
  @import url('https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css');

  ${resetStyles}

  * {
    box-sizing: border-box;
    outline: none;
  }

  html {
    font-size: 14px;
  }

  body {
    font-family: 'NanumSquare', sans-serif;
    font-weight: ${VARIABLES.FONT_WEIGHT_REGULAR};
    color: ${VARIABLES.COLOR_BLACK};
  }
`;
