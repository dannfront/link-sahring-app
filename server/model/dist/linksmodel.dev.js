"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LinksSchema = new _mongoose["default"].Schema({
  url: {
    type: String,
    required: [true, "url is required"]
  },
  img: {
    type: String,
    required: [true, "img is required"]
  },
  platform: {
    type: String
  },
  color: String
});
var _default = LinksSchema;
exports["default"] = _default;