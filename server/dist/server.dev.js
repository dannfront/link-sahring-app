"use strict";

var _app = require("./app.js");

var _connectionDb = _interopRequireDefault(require("./utils/connectionDb.js"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config({
  path: "./config.env"
});

(0, _connectionDb["default"])(process.env.CONNECTION_DB);
var port = 3002;
var host = "localhost";

_app.app.listen(port, function () {
  return console.log("Servidor iniciado en http://".concat(host, ":").concat(port));
});