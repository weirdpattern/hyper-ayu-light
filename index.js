/**
 * MIT License
 *
 * Copyright (c) 2017 WeirdPattern
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use strict';

const BACKGROUND = '#FAFAFA';
const FOREGROUND = '#6E7580';

const RED = '#F51818';
const GREEN = '#86B300';
const YELLOW = '#F29718';
const CYAN = '#55B4d4';
const BLUE = '#399EE6';
const MAGENTA = '#A37ACC';
const DARK_GRAY = '#B3B2B1';
const WHITE = '#FFFFFF';

const CURSOR_COLOR = YELLOW;
const BORDER_COLOR = BACKGROUND;

let TAB_BORDER_COLOR = '#E2E4E7';
const TAB_TEXT_COLOR = FOREGROUND;
const TAB_BORDER_ACTIVE_COLOR = '#FF6A00';

const colors = {
  black: BACKGROUND,
  red: RED,
  green: GREEN,
  yellow: YELLOW,
  blue: BLUE,
  magenta: MAGENTA,
  cyan: CYAN,
  white: DARK_GRAY,
  lightBlack: DARK_GRAY,
  lightRed: RED,
  lightGreen: GREEN,
  lightYellow: YELLOW,
  lightBlue: BLUE,
  lightMagenta: MAGENTA,
  lightCyan: CYAN,
  colorCubes: WHITE,
  grayscale: FOREGROUND
};

exports.decorateConfig = (config) => {
  let windowControlsCSS = '';
  if (config.showWindowControls) {
    windowControlsCSS = '.list_2902 { margin-left: 0 !important; }';
  }

  const ayu = config.ayu || {};
  const isWin = /^win/.test(process.platform);

  // tab border customization
  let tabBorder = '';
  let tabNoFirstChild = '';
  let headerBorderColor = ayu.noBorder === true || ayu.showHeaderBorder === false ? BACKGROUND : TAB_BORDER_COLOR;
  let tabBorderColor = ayu.noBorder === true || ayu.showTabBorder === false ? BACKGROUND : TAB_BORDER_COLOR;

  // environment specifics
  if (isWin) {
	  tabBorder = `border-bottom: 1px solid ${tabBorderColor} !important;`;
    tabNoFirstChild = ':not(:first-child)';
  } else {
	  headerBorderColor = tabBorderColor;
  }

  // header customization (windows only)
  let headerForegroundColor = FOREGROUND;
  let headerBackgroundColor = BACKGROUND;
  if (isWin) {
	  headerBackgroundColor = ayu.headerBackgroundColor || headerBackgroundColor;
    headerForegroundColor = ayu.headerForegroundColor || headerForegroundColor;
  }

  return Object.assign({}, config, {
    foregroundColor: FOREGROUND,
    backgroundColor: BACKGROUND,
    borderColor: BORDER_COLOR,
    cursorColor: CURSOR_COLOR,
    colors,
    css: `
      ${config.css || ''}
      .hyper_main {
        border: none !important;
      }
      .splitpane_divider {
        background-color: ${tabBorderColor} !important;
      }
      .header_header, .header_windowHeader {
        top: 0;
        left: 0;
        right: 0;
        color: ${headerForegroundColor} !important;
        background: ${headerBackgroundColor} !important;
        border-bottom: 1px solid ${headerBorderColor} !important;
      }
      .header_shape {
        color: ${headerForegroundColor} !important;
      }
      .tabs_title {
        color: ${TAB_TEXT_COLOR};
        font-weight: 600;
      }
      .tab_tab {
        border: 0;
        background-color: ${BACKGROUND};
        ${tabBorder}
      }
      .tab_tab${tabNoFirstChild} {
        border-left: 1px solid ${tabBorderColor} !important;
      }
      .tab_text {
        color: ${TAB_TEXT_COLOR};
        font-weight: normal;
      }
      .tab_textActive {
        color: ${TAB_TEXT_COLOR};
        font-weight: 600;
        background-color: ${BACKGROUND};
        border-bottom: 1px solid ${TAB_BORDER_ACTIVE_COLOR} !important;
      }
      .tab_icon {
        color: ${TAB_TEXT_COLOR};
        font-weight: 600;
      }
      .tab_icon:hover {
        color: ${TAB_TEXT_COLOR};
        font-weight: 600;
      }
      ${windowControlsCSS}
    `
  });
};
