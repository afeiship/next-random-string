/*!
 * name: @feizheng/next-random-string
 * description: Random string for next.
 * url: https://github.com/afeiship/next-random-string
 * version: 1.0.0
 * date: 2020-03-28 12:59:29
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.randomString = function() {
    //code goes here.
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.randomString;
  }
})();

//# sourceMappingURL=next-random-string.js.map
