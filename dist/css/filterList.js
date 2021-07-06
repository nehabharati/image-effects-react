"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterList = void 0;

var _customize = require("../customizeFunctions/customize");

const filterList = {
  1977(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n        position: relative;\n        ".concat((0, _customize.cbs)({
      sat: props.saturation ? props.saturation : 1.1,
      bright: props.brightness ? props.brightness : 1.1,
      contrast: props.contrast ? props.contrast : 1.1
    }), " \n\n        &::before {\n            content: '';\n            display: block;\n            width: 100%;\n            height: 15rem;\n            top: 0;\n            left: 0;\n            position: absolute;\n            pointer-events: none;\n            z-index: 2;\n          }\n        \n          &::after {\n            content: '';\n            display: block;\n            width: 100%;\n            height: 15rem;\n            top: 0;\n            left: 0;\n            position: absolute;\n            pointer-events: none;\n            z-index: 3;\n          }\n        \n          &::after {\n            background: rgba(243, 106, 188, 0.3);\n            mix-blend-mode: screen;\n          }");
  },

  aden(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem;\n            object-fit:cover;\n            }\n        position: relative;\n        ".concat((0, _customize.hcbs)({
      hue: props.hue ? props.hue : '-20deg',
      sat: props.saturation ? props.saturation : 0.85,
      bright: props.brightness ? props.brightness : 1.2,
      contrast: props.contrast ? props.contrast : 0.9
    }), " \n      \n\n        &:before {\n            content: '';\n            display: block;\n            height: 100%;\n            width: 100%;\n            top: 0;\n            left: 0;\n            position: absolute;\n            pointer-events: none;\n            z-index: 2; }\n        \n        &:after {\n            content: '';\n            display: block;\n            height: 100%;\n            width: 100%;\n            top: 0;\n            left: 0;\n            position: absolute;\n            pointer-events: none;\n            z-index: 3; }\n        \n        &::after {\n            background: -webkit-linear-gradient(left, rgba(66, 10, 14, 0.2), transparent);\n            background: linear-gradient(to right, rgba(66, 10, 14, 0.2), transparent);\n            mix-blend-mode: darken; }\n    ");
  },

  amaro(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n        position: relative;\n        z-index: 1;\n        ".concat((0, _customize.hcbs)({
      hue: props.hue ? props.hue : '-10deg',
      sat: props.saturation ? props.saturation : 1.5,
      bright: props.brightness ? props.brightness : 1.1,
      contrast: props.contrast ? props.contrast : 0.9
    }), " \n        \n\n        &::before,\n        &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none; }\n\n        &:before {\n            z-index: 2; \n        }\n        \n        &:after {\n            z-index: 3; \n        }\n\n        &::after{\n            mix-blend-mode: screen; \n        }\n        ");
  },

  brannan(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n    position: relative;\n    z-index: 1;\n    ".concat((0, _customize.cs)({
      sepia: props.sepia ? props.sepia : 0.5,
      contrast: props.contrast ? props.contrast : 1.4
    }), " \n\n    &:before {\n      content: '';\n      display: block;\n      height: 100%;\n      width: 100%;\n      top: 0;\n      left: 0;\n      position: absolute;\n      pointer-events: none;\n      z-index: 2; }\n    \n    &:after {\n      content: '';\n      display: block;\n      height: 100%;\n      width: 100%;\n      top: 0;\n      left: 0;\n      position: absolute;\n      pointer-events: none;\n      z-index: 3; }\n    \n    &::after {\n      background-color: rgba(161, 44, 199, 0.31);\n      mix-blend-mode: lighten; }\n");
  },

  clarendon(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n    position: relative;\n    ".concat((0, _customize.csat)({
      sat: props.saturation ? props.saturation : 1.35,
      contrast: props.contrast ? props.contrast : 1.2
    }), " \n   \n    &:before {\n      content: '';\n      display: block;\n      height: 100%;\n      width: 100%;\n      top: 0;\n      left: 0;\n      position: absolute;\n      pointer-events: none;\n      z-index: 2; }\n    \n    &:after {\n      content: '';\n      display: block;\n      height: 100%;\n      width: 100%;\n      top: 0;\n      left: 0;\n      position: absolute;\n      pointer-events: none;\n      z-index: 3; }\n    \n    &:before {\n      background: rgba(127, 187, 227, 0.2);\n      mix-blend-mode: overlay; }\n");
  },

  earlyBird(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n    position: relative;\n    ".concat((0, _customize.cs)({
      sepia: props.sepia ? props.sepia : 0.2,
      contrast: props.contrast ? props.contrast : 0.9
    }), " \n\n    &:before {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 2; }\n      \n      &:after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 3; }\n      \n      &::after {\n        background: -webkit-radial-gradient(circle, #d0ba8e 20%, #360309 85%, #1d0210 100%);\n        background: radial-gradient(circle, #d0ba8e 20%, #360309 85%, #1d0210 100%);\n        mix-blend-mode: overlay; }\n");
  },

  gingham(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n    position: relative;\n    ".concat((0, _customize.hb)({
      bright: props.brightness ? props.brightness : 1.1,
      hueRotate: props.hueRotate ? props.hueRotate : '-10deg'
    }), " \n\n    &:before {\n    content: '';\n    display: block;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    position: absolute;\n    pointer-events: none;\n    z-index: 2; }\n    \n    &:after {\n    content: '';\n    display: block;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    position: absolute;\n    pointer-events: none;\n    z-index: 3; }\n    \n    &::after {\n    background: lavender;\n    mix-blend-mode: soft-light; }\n  ");
  },

  hudson(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n    position: relative;\n    ".concat((0, _customize.cbs)({
      sat: props.saturation ? props.saturation : 1.1,
      bright: props.brightness ? props.brightness : 1.2,
      contrast: props.contrast ? props.contrast : 0.9
    }), " \n   \n\n    &:before {\n      content: '';\n      display: block;\n      height: 100%;\n      width: 100%;\n      top: 0;\n      left: 0;\n      position: absolute;\n      pointer-events: none;\n      z-index: 2; }\n    \n    &:after {\n      content: '';\n      display: block;\n      height: 100%;\n      width: 100%;\n      top: 0;\n      left: 0;\n      position: absolute;\n      pointer-events: none;\n      z-index: 3; }\n    \n    &::after {\n      background: -webkit-radial-gradient(circle, #a6b1ff 50%, #342134);\n      background: radial-gradient(circle, #a6b1ff 50%, #342134);\n      mix-blend-mode: multiply;\n      opacity: .5; }\n  ");
  },

  inkwell(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n    position: relative;\n    ".concat((0, _customize.scbg)({
      sepia: props.sepia ? props.sepia : 0.3,
      bright: props.brightness ? props.brightness : 1.1,
      contrast: props.contrast ? props.contrast : 1.1,
      grayscale: props.grayscale ? props.grayscale : 1
    }), " \n\n    &:before {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 2; }\n        \n    &:after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 3; }\n");
  },

  kelvin(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n    position: relative;\n\n    &:before {\n      content: '';\n      display: block;\n      height: 100%;\n      width: 100%;\n      top: 0;\n      left: 0;\n      position: absolute;\n      pointer-events: none;\n      z-index: 2; }\n    \n    &:after {\n      content: '';\n      display: block;\n      height: 100%;\n      width: 100%;\n      top: 0;\n      left: 0;\n      position: absolute;\n      pointer-events: none;\n      z-index: 3; }\n    \n    &::after {\n      background: ".concat(props.backgroundAfter ? props.backgroundAfter : '#b77d21', ";\n\n      mix-blend-mode: overlay; }\n    \n    &::before {\n      background: ").concat(props.backgroundBefore ? props.backgroundBefore : '#382c34', ";\n      mix-blend-mode: color-dodge; }\n");
  },

  lark(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n    position: relative;\n    -webkit-filter: contrast(".concat(props.contrast ? props.contrast : 0.9, ");\n    filter: contrast(").concat(props.contrast ? props.contrast : 0.9, ");\n\n    &:before {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 2; }\n      \n      &:after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 3; }\n      \n      &::after {\n        background: rgba(242, 242, 242, 0.8);\n        mix-blend-mode: darken; }\n      \n      &::before {\n        background: #22253f;\n        mix-blend-mode: color-dodge; }\n");
  },

  lofi(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n    position: relative;\n    ".concat((0, _customize.csat)({
      sat: props.saturation ? props.saturation : 1.1,
      contrast: props.contrast ? props.contrast : 1.5
    }), " \n \n    &before {\n      content: '';\n      display: block;\n      height: 100%;\n      width: 100%;\n      top: 0;\n      left: 0;\n      position: absolute;\n      pointer-events: none;\n      z-index: 2; }\n  \n  &after {\n      content: '';\n      display: block;\n      height: 100%;\n      width: 100%;\n      top: 0;\n      left: 0;\n      position: absolute;\n      pointer-events: none;\n      z-index: 3; }\n  \n  &:after {\n      background: -webkit-radial-gradient(circle, transparent 70%, #222222 150%);\n      background: radial-gradient(circle, transparent 70%, #222222 150%);\n      mix-blend-mode: multiply; }\n");
  },

  maven(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n    position: relative;\n    ".concat((0, _customize.scbsat)({
      sat: props.saturation ? props.saturation : 1.5,
      bright: props.brightness ? props.brightness : 0.95,
      contrast: props.contrast ? props.contrast : 0.95,
      sepia: props.sepia ? props.sepia : 0.25
    }), " \n\n    &:before {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 2; }\n        \n        &:after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 3; }\n        \n        &:after {\n        background: rgba(3, 230, 26, 0.2);\n        mix-blend-mode: hue; }\n    ");
  },

  mayfair(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n    position: relative;\n    ".concat((0, _customize.csat)({
      sat: props.saturation ? props.saturation : 1.1,
      contrast: props.contrast ? props.contrast : 1.1
    }), " \n  \n\n   &:before {\n      content: '';\n      display: block;\n      height: 100%;\n      width: 100%;\n      top: 0;\n      left: 0;\n      position: absolute;\n      pointer-events: none;\n      z-index: 2; }\n    \n   &:after {\n      content: '';\n      display: block;\n      height: 100%;\n      width: 100%;\n      top: 0;\n      left: 0;\n      position: absolute;\n      pointer-events: none;\n      z-index: 3; }\n    \n   &::after {\n      background: -webkit-radial-gradient(40% 40%, circle, rgba(255, 255, 255, 0.8), rgba(255, 200, 200, 0.6), #111111 60%);\n      background: radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.8), rgba(255, 200, 200, 0.6), #111111 60%);\n      mix-blend-mode: overlay;\n      opacity: .4; }\n    ");
  },

  moon(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n    position: relative;\n    ".concat((0, _customize.gcb)({
      grayscale: props.grayscale ? props.grayscale : 1,
      bright: props.brightness ? props.brightness : 1.1,
      contrast: props.contrast ? props.contrast : 1.1
    }), " \n\n    &:before {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 2; }\n        \n    &:after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 3; }\n        \n    &::before {\n        background: #a0a0a0;\n        mix-blend-mode: soft-light; }\n        \n    &::after {\n        background: #383838;\n        mix-blend-mode: lighten; }\n    ");
  },

  nashville(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n    position: relative;\n    ".concat((0, _customize.scbsat)({
      sat: props.saturation ? props.saturation : 1.2,
      bright: props.brightness ? props.brightness : 1.05,
      contrast: props.contrast ? props.contrast : 1.2,
      sepia: props.sepia ? props.sepia : 0.2
    }), " \n\n    &:before {\n    content: '';\n    display: block;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    position: absolute;\n    pointer-events: none;\n    z-index: 2; }\n\n    &:after {\n    content: '';\n    display: block;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    position: absolute;\n    pointer-events: none;\n    z-index: 3; }\n\n    &::after {\n    background: rgba(0, 70, 150, 0.4);\n    mix-blend-mode: lighten; }\n\n    &::before {\n    background: rgba(247, 176, 153, 0.56);\n    mix-blend-mode: darken; }\n      ");
  },

  perpetua() {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n    position: relative;\n    &:before {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 2; }\n      \n      &:after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 3; }\n      \n      &::after {\n        background: -webkit-linear-gradient(top, #005b9a, #e6c13d);\n        background: linear-gradient(to bottom, #005b9a, #e6c13d);\n        mix-blend-mode: soft-light;\n        opacity: .5; }\n";
  },

  reyes(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n    position: relative;\n    ".concat((0, _customize.scbsat)({
      sat: props.saturation ? props.saturation : 0.75,
      bright: props.brightness ? props.brightness : 1.1,
      contrast: props.contrast ? props.contrast : 0.85,
      sepia: props.sepia ? props.sepia : 0.22
    }), " \n\n    &:before {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 2; }\n    \n    &:after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 3; }\n    \n    &::after {\n        background: #efcdad;\n        mix-blend-mode: soft-light;\n        opacity: .5; }\n");
  },

  rise(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n    position: relative;\n    ".concat((0, _customize.scbsat)({
      sat: props.saturation ? props.saturation : 0.9,
      bright: props.brightness ? props.brightness : 1.05,
      contrast: props.contrast ? props.contrast : 0.9,
      sepia: props.sepia ? props.sepia : 0.2
    }), " \n  \n    &:before {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 2; }\n\n    &:after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 3; }\n\n    &::after {\n        background: -webkit-radial-gradient(circle, rgba(232, 197, 152, 0.8), transparent 90%);\n        background: radial-gradient(circle, rgba(232, 197, 152, 0.8), transparent 90%);\n        mix-blend-mode: overlay;\n        opacity: .6; }\n\n    &::before {\n        background: -webkit-radial-gradient(circle, rgba(236, 205, 169, 0.15) 55%, rgba(50, 30, 7, 0.4));\n        background: radial-gradient(circle, rgba(236, 205, 169, 0.15) 55%, rgba(50, 30, 7, 0.4));\n        mix-blend-mode: multiply; }\n    ");
  },

  slumber(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n    position: relative;\n    ".concat((0, _customize.sb)({
      sat: props.saturation ? props.saturation : 0.66,
      bright: props.brightness ? props.brightness : 1.05
    }), " \n\n    &:before {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 2; }\n        \n    .&:after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 3; }\n    \n    .&::after {\n        background: rgba(125, 105, 24, 0.5);\n        mix-blend-mode: soft-light; }\n    \n    .&::before {\n        background: rgba(69, 41, 12, 0.4);\n        mix-blend-mode: lighten; }\n    ");
  },

  stinson(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n    position: relative;\n    ".concat((0, _customize.cbs)({
      sat: props.saturation ? props.saturation : 0.85,
      bright: props.brightness ? props.brightness : 1.15,
      contrast: props.contrast ? props.contrast : 0.75
    }), " \n   \n\n    &:before {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 2; }\n    \n    &:after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 3; }\n    \n    &::before {\n        background: rgba(240, 149, 128, 0.2);\n        mix-blend-mode: soft-light;\n  ");
  },

  toaster(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n    position: relative;\n    ".concat((0, _customize.contrastBrightness)(props.brightness, props.contrast), "\n\n    &:before {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 2; }\n        \n    &:after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 3; }\n        \n    &::after {\n        background: -webkit-radial-gradient(circle, #804e0f, #3b003b);\n        background: radial-gradient(circle, #804e0f, #3b003b);\n        mix-blend-mode: screen; }\n");
  },

  valencia(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n    position: relative;\n    ".concat((0, _customize.cbsep)({
      sepia: props.sepia ? props.sepia : 0.08,
      bright: props.brightness ? props.brightness : 1.08,
      contrast: props.contrast ? props.contrast : 1.08
    }), " \n\n    &:before {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 2; }\n    \n    &:after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 3; }\n    \n    &::after {\n        background: #3a0339;\n        mix-blend-mode: exclusion;\n        opacity: .5; }\n  ");
  },

  walden(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n    position: relative;\n    ".concat((0, _customize.hbss)({
      sat: props.saturation ? props.saturation : 1.6,
      sepia: props.sepia ? props.sepia : 0.3,
      bright: props.brightness ? props.brightness : 1.1,
      hueRotate: props.hueRotate ? props.hueRotate : '-10deg'
    }), " \n  \n    &:before {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 2; }\n      \n    &:after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 3; }\n      \n    &::after {\n        background: #0044cc;\n        mix-blend-mode: screen;\n        opacity: .3; }\n  ");
  },

  willow(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n    position: relative;\n    ".concat((0, _customize.gcb)({
      grayscale: props.grayscale ? props.grayscale : 0.5,
      bright: props.brightness ? props.brightness : 0.9,
      contrast: props.contrast ? props.contrast : 0.95
    }), " \n        \n    &:before {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 2; }\n    \n    &:after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 3; }\n    \n    &::before {\n        background-color: radial-gradient(40%, circle, #d4a9af 55%, black 150%);\n        mix-blend-mode: overlay; }\n    \n    &::after {\n        background-color: #d8cdcb;\n        mix-blend-mode: color; }\n    ");
  },

  xpro(props) {
    return "\n        img {\n            width: 100%;\n            height: 15rem; object-fit: cover;\n            }\n        position: relative;\n        -webkit-filter: sepia(".concat(props.sepia ? props.sepia : 0.3, ");\n        filter: sepia(").concat(props.sepia ? props.sepia : 0.3, "); \n            \n    &:before {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 2; }\n    \n    &:after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        top: 0;\n        left: 0;\n        position: absolute;\n        pointer-events: none;\n        z-index: 3; }\n    \n    &::after {\n        background: -webkit-radial-gradient(circle, #e6e7e0 40%, rgba(43, 42, 161, 0.6) 110%);\n        background: radial-gradient(circle, #e6e7e0 40%, rgba(43, 42, 161, 0.6) 110%);\n        mix-blend-mode: color-burn; }\n        ");
  }

};
exports.filterList = filterList;