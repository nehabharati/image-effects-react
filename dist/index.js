'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.ImageContainer = void 0;

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _filterList = require('./css/filterList');

var _templateObject;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

const ImageContainer = _styledComponents.default.figure(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  width: 100%;\n  height: 15rem;\n  margin: 0;\n\n  ',
      '\n',
    ])),
  (props) => {
    let {
      saturation,
      brightness,
      contrast,
      sepia,
      grayscale,
      hueRotate,
      filter,
      backgroundBefore,
      backgroundAfter,
    } = props.options;
    return _filterList.filterList[filter]({
      saturation,
      brightness,
      contrast,
      sepia,
      grayscale,
      hueRotate,
      backgroundBefore,
      backgroundAfter,
    });
  }
);

exports.ImageContainer = ImageContainer;
