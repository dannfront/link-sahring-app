"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _expressMongoSanitize = _interopRequireDefault(require("express-mongo-sanitize"));

var _expressRateLimit = _interopRequireDefault(require("express-rate-limit"));

var _helmet = _interopRequireDefault(require("helmet"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _RouterLogin = _interopRequireDefault(require("./routes/RouterLogin.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
exports.app = app;
var limiter = (0, _expressRateLimit["default"])({
  windowMs: 24 * 60 * 60 * 100,
  max: 250
});
app.use((0, _cors["default"])({
  origin: process.env.URL_CLIENT || "http://localhost:5173",
  credentials: true
}));
app.use('/uploads', _express["default"]["static"]('uploads'));
app.use((0, _helmet["default"])());
app.use(limiter);
app.use((0, _expressMongoSanitize["default"])());
app.use((0, _cookieParser["default"])());
app.use(_express["default"].json());
app.use('/api/v1/users', _RouterLogin["default"]);
app.use(function (err, req, res, next) {
  res.status(500).json({
    status: "failed",
    error: err.message
  });
});