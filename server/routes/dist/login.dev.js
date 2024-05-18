"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authController = require("../controller/authController.js");

var _updateController = _interopRequireDefault(require("../controller/updateController.js"));

var _previewController = _interopRequireDefault(require("../controller/previewController.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routerLogin = _express["default"].Router();

routerLogin.get('/login', _authController.loginController);
routerLogin.post('/register', _authController.registerController);
routerLogin.get('/preview/:id', _previewController["default"]); //autenticacion

routerLogin.patch('/', _authController.auth, _updateController["default"]);
routerLogin.get('/', _authController.auth, _authController.getUser);
var _default = routerLogin;
exports["default"] = _default;