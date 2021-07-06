"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contrastBrightness = contrastBrightness;
exports.hueBrightness = hueBrightness;
exports.cbs = cbs;
exports.cbsep = cbsep;
exports.hcbs = hcbs;
exports.cs = cs;
exports.csat = csat;
exports.scbsat = scbsat;
exports.gcb = gcb;
exports.hbss = hbss;
exports.hb = hb;
exports.scbg = scbg;
exports.sb = sb;

function contrastBrightness(contrast, brightness) {
  return "\n        contrast(".concat(contrast, ") \n        brightness(").concat(brightness, ") \n    ");
}

function hueBrightness(hueRotate, brightness) {
  return "\n        hue-rotate(".concat(hueRotate, ") \n        brightness(").concat(brightness, ") \n    ");
}

function cbs(props) {
  return "\n    -webkit-filter: \n        ".concat(contrastBrightness.apply(this, [props.contrast, props.bright]), "\n        saturate(").concat(props.sat, ");\n    \n    filter: \n        ").concat(contrastBrightness.apply(this, [props.contrast, props.bright]), "\n        saturate(").concat(props.sat, ");\n    ");
}

function cbsep(props) {
  return "\n    -webkit-filter: \n        ".concat(contrastBrightness.apply(this, [props.contrast, props.bright]), "\n        sepia(").concat(props.sepia, ");\n    \n    filter: \n        ").concat(contrastBrightness.apply(this, [props.contrast, props.bright]), "\n        sepia(").concat(props.sepia, ");\n    ");
}

function hcbs(props) {
  return "\n    -webkit-filter: \n        ".concat(contrastBrightness.apply(this, [props.contrast, props.bright]), "\n        hue-rotate(").concat(props.hue, ")\n        saturate(").concat(props.sat, ");\n    \n    filter: \n        ").concat(contrastBrightness.apply(this, [props.contrast, props.bright]), "\n        hue-rotate(").concat(props.hue, ")\n        saturate(").concat(props.sat, ");\n    ");
}

function cs(props) {
  return "\n    -webkit-filter: \n        contrast(".concat(props.contrast, ") \n        sepia(").concat(props.sepia, ");\n    \n    filter: \n        contrast(").concat(props.contrast, ") \n        sepia(").concat(props.sepia, ");\n    ");
}

function csat(props) {
  return "\n    -webkit-filter: \n        contrast(".concat(props.contrast, ") \n        saturate(").concat(props.sat, ");\n    \n    filter: \n        contrast(").concat(props.contrast, ") \n        saturate(").concat(props.sat, ");\n    ");
}

function scbsat(props) {
  return "\n      -webkit-filter: \n          ".concat(contrastBrightness.apply(this, [props.contrast, props.bright]), "\n          saturate(").concat(props.sat, ")\n          sepia(").concat(props.sepia, ");\n      \n      filter:\n          ").concat(contrastBrightness.apply(this, [props.contrast, props.bright]), "\n          saturate(").concat(props.sat, ")\n          sepia(").concat(props.sepia, ");\n      ");
}

function gcb(props) {
  return "\n      -webkit-filter: \n          ".concat(contrastBrightness.apply(this, [props.contrast, props.bright]), "\n          grayscale(").concat(props.grayscale, ");\n      \n      filter: \n          ").concat(contrastBrightness.apply(this, [props.contrast, props.bright]), "\n          grayscale(").concat(props.grayscale, ");\n      ");
}

function hbss(props) {
  return "\n      -webkit-filter: \n      ".concat(hueBrightness.apply(this, [props.hueRotate, props.bright]), "\n        sepia(").concat(props.sepia, ")\n        saturate(").concat(props.sat, ")\n      \n      filter: \n      ").concat(hueBrightness.apply(this, [props.hueRotate, props.bright]), "\n        sepia(").concat(props.sepia, ")\n        saturate(").concat(props.sat, ")\n      ");
}

function hb(props) {
  return "\n      -webkit-filter: \n      ".concat(hueBrightness.apply(this, [props.hueRotate, props.bright]), "\n      \n      filter: \n      ").concat(hueBrightness.apply(this, [props.hueRotate, props.bright]), "\n      ");
}

function scbg(props) {
  return "\n      -webkit-filter: \n        ".concat(contrastBrightness.apply(this, [props.contrast, props.bright]), "\n        sepia(").concat(props.sepia, ")\n        grayscale(").concat(props.grayscale, ");\n      \n      filter: \n        ").concat(contrastBrightness.apply(this, [props.contrast, props.bright]), "\n        sepia(").concat(props.sepia, ")\n        grayscale(").concat(props.grayscale, ");\n      ");
}

function sb(props) {
  return "\n      -webkit-filter: \n        saturation(".concat(props.sat, ")\n        bright(").concat(props.bright, ");\n      \n      filter: \n        saturation(").concat(props.sat, ")\n        bright(").concat(props.bright, ");\n      ");
}