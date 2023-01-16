"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _bignumber = _interopRequireDefault(require("bignumber.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function sum(num1, num2) {
  num1 = new _bignumber["default"](num1);
  num2 = new _bignumber["default"](num2);
  return num1.plus(num2).toNumber();
}
var _default = {
  sum: sum
};
exports["default"] = _default;