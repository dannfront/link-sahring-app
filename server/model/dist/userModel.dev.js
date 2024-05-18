"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _validator = _interopRequireDefault(require("validator"));

var _linksmodel = _interopRequireDefault(require("./linksmodel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var usersSchema = new _mongoose["default"].Schema({
  email: {
    type: String,
    required: [true, "the name is mandatory"],
    unique: true,
    validator: [_validator["default"].isEmail, "email is required"]
  },
  password: {
    type: String,
    minlength: 8,
    required: [true, "password is required"],
    select: false
  },
  confirmPassword: {
    type: String,
    validate: {
      validator: function validator(v) {
        return v === this.password;
      },
      message: "the password is not the same"
    },
    select: false
  },
  name: {
    type: String,
    "default": ""
  },
  lastName: {
    type: String,
    "default": ""
  },
  photo: {
    type: String,
    "default": ""
  },
  links: [_linksmodel["default"]]
});
usersSchema.pre('save', function _callee(next) {
  var saltRounds, passwordHash;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!this.isModified("password")) next();
          saltRounds = 10;
          _context.next = 4;
          return regeneratorRuntime.awrap(_bcrypt["default"].hash(this.password, saltRounds));

        case 4:
          passwordHash = _context.sent;
          this.password = passwordHash;
          this.confirmPassword = undefined;
          next();

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, this);
});

usersSchema.methods.correctPasword = function _callee2(currentPass, passDb) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_bcrypt["default"].compare(currentPass, passDb));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var User = _mongoose["default"].model("User", usersSchema);

var _default = User;
exports["default"] = _default;