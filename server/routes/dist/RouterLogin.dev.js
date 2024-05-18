"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _multer = _interopRequireDefault(require("multer"));

var _authController = require("../controller/authController.js");

var _updateController = _interopRequireDefault(require("../controller/updateController.js"));

var _previewController = _interopRequireDefault(require("../controller/previewController.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routerLogin = _express["default"].Router();

var upload = (0, _multer["default"])({
  dest: 'uploads/'
});
routerLogin.post('/login', _authController.loginController);
routerLogin.post('/register', _authController.registerController);
routerLogin.get('/preview/:id', _previewController["default"]); //autenticacion

routerLogin.get('/', _authController.auth, _authController.getUser);
routerLogin.patch('/', upload.single('avatar'), _authController.auth, _updateController["default"]);
var _default = routerLogin;
exports["default"] = _default;