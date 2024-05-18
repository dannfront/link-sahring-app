"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = auth;
exports.loginController = loginController;
exports.registerController = registerController;
exports.getUser = getUser;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _util = _interopRequireDefault(require("util"));

var _userModel = _interopRequireDefault(require("../model/userModel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function sendToken(user, res, req, id) {
  var token = _jsonwebtoken["default"].sign({
    id: id
  }, process.env.SECRET_JWT_TOKEN, {
    expiresIn: process.env.EXPIRE_IN
  });

  var cookieOptinos = {
    expires: new Date(Date.now() + process.env.EXPIRE_COOKIE_IN * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: req.secure || req.headers['X-Forwarded-Proto'] === 'https'
  };
  res.cookie('jwt', token, cookieOptinos);
  user.password = undefined;
  res.status(200).json({
    status: "succes",
    token: token,
    user: user
  });
}

function auth(req, res, next) {
  var token, decoded, user;
  return regeneratorRuntime.async(function auth$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;

          if (req.headers.authorization && req.get("authorization").startsWith("Bearer")) {
            token = req.get("authorization").split(" ")[1];
          } else if (req.cookies.jwt) {
            token = req.cookies.jwt;
          }

          if (token) {
            _context.next = 4;
            break;
          }

          throw new Error("Token invalid");

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(_util["default"].promisify(_jsonwebtoken["default"].verify)(token, process.env.SECRET_JWT_TOKEN));

        case 6:
          decoded = _context.sent;
          _context.next = 9;
          return regeneratorRuntime.awrap(_userModel["default"].findById(decoded.id));

        case 9:
          user = _context.sent;

          if (user) {
            _context.next = 12;
            break;
          }

          throw new Error("user is not found");

        case 12:
          req.user = user;
          next();
          _context.next = 19;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          next(_context.t0);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 16]]);
}

function loginController(req, res, next) {
  var _req$body, email, password, user;

  return regeneratorRuntime.async(function loginController$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, email = _req$body.email, password = _req$body.password;

          if (!(!email || !password)) {
            _context2.next = 4;
            break;
          }

          throw new Error("password and email are required");

        case 4:
          _context2.next = 6;
          return regeneratorRuntime.awrap(_userModel["default"].findOne({
            email: email
          }).select("password"));

        case 6:
          user = _context2.sent;
          _context2.t0 = !user;

          if (_context2.t0) {
            _context2.next = 12;
            break;
          }

          _context2.next = 11;
          return regeneratorRuntime.awrap(user.correctPasword(password, user.password));

        case 11:
          _context2.t0 = !_context2.sent;

        case 12:
          if (!_context2.t0) {
            _context2.next = 14;
            break;
          }

          throw new Error("incorrect password or email");

        case 14:
          sendToken(user, res, req, user.id);
          _context2.next = 20;
          break;

        case 17:
          _context2.prev = 17;
          _context2.t1 = _context2["catch"](0);
          next(_context2.t1);

        case 20:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 17]]);
}

function registerController(req, res, next) {
  var newUser, token;
  return regeneratorRuntime.async(function registerController$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_userModel["default"].create(req.body));

        case 3:
          newUser = _context3.sent;
          token = _jsonwebtoken["default"].sign({
            id: newUser._id
          }, process.env.SECRET_JWT_TOKEN, {
            expiresIn: process.env.EXPIRE_IN
          });
          sendToken(newUser, res, req, newUser.id);
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
}

function getUser(req, res, next) {
  var user;
  return regeneratorRuntime.async(function getUser$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(_userModel["default"].findById(req.user.id).select("-links._id"));

        case 2:
          user = _context4.sent;
          res.status(200).json({
            status: "succes",
            user: user
          });

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
}