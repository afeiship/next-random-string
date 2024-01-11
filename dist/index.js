/*!
 * name: @jswork/next-random-string
 * description: Random string for next.
 * homepage: https://js.work
 * version: 1.0.1
 * date: 2024-01-11 16:06:52
 * license: MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;
var _next = _interopRequireDefault(require('@jswork/next'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var defaults = {
  charSet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
};
_next['default'].randomString = function (inLength, inOptions) {
  var options = _next['default'].mix(null, defaults, inOptions);
  var randomString = '';
  for (var i = 0; i < inLength; i++) {
    var randomPoz = Math.floor(Math.random() * options.charSet.length);
    randomString += options.charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
};
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = _next['default'].randomString;
}
var _default = (exports['default'] = _next['default'].randomString);
