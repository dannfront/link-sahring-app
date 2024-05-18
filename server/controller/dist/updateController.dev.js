"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = updateUserController;

var _console = require("console");

var _userModel = _interopRequireDefault(require("../model/userModel.js"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function updateUserController(req, res, next) {
  var newPath, lastName, extension, currentUser, user;
  return regeneratorRuntime.async(function updateUserController$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          lastName = req.body.lastName === "" ? "" : req.body.lastName;

          if (req.file) {
            extension = req.file.originalname.split(".")[1];
            newPath = "uploads/".concat(req.user.id, ".").concat(extension);

            _fs["default"].rename(req.file.path, newPath, function (err) {
              if (err) throw err;
              console.log("succes");
            });
          }

          currentUser = {
            name: req.body.name || req.user.name,
            lastName: req.body.lastName || lastName,
            email: req.body.email || req.user.email,
            photo: newPath || req.body.photo || req.user.photo,
            links: req.body.links || req.user.links || []
          };
          _context.next = 5;
          return regeneratorRuntime.awrap(_userModel["default"].findByIdAndUpdate(req.user.id, currentUser, {
            runValidators: true
          }));

        case 5:
          user = _context.sent;
          res.status(200).json({
            status: "succes",
            user: user
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}