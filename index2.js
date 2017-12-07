"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(foo);

// require('babel-runtime/core-js/array/find')
// require('babel-runtime/core-js/string/includes')
// require('babel-runtime/core-js/array/find')
var obj = {};
(0, _assign2.default)(obj, { age: 30 });
console.log("foobar".endsWith("bar"));
console.log("foobar".includes("foo"));
console.log((0, _from2.default)('1,2,3'));
console.log([1, 2, 3].map(function (n) {
  return n + 1;
}));
console.log([1, 2, 3].find(function (n) {
  return n > 2;
}));

new _promise2.default(function (resolve, reject) {});

function foo() {
  return _regenerator2.default.wrap(function foo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}
