"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = previewController;

var _userModel = _interopRequireDefault(require("../model/userModel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function previewController(req, res, next) {
  var id, user;
  return regeneratorRuntime.async(function previewController$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          id = req.params.id;
          _context.next = 4;
          return regeneratorRuntime.awrap(_userModel["default"].findById(id).select("-_id"));

        case 4:
          user = _context.sent;

          if (user) {
            _context.next = 7;
            break;
          }

          throw new Error("user not fund");

        case 7:
          res.status(200).json({
            satatus: "succes",
            user: user
          });
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          next(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
}