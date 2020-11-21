/*!
 * name: @jswork/next-random-string
 * description: Random string for next.
 * homepage: https://github.com/afeiship/next-random-string
 * version: 1.0.0
 * date: 2020-11-21 10:33:51
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DEFAULT_OPTIONS = {
    charSet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  };

  nx.randomString = function (inLength, inOptions) {
    var options = nx.mix(null, inOptions, DEFAULT_OPTIONS);
    var randomString = '';
    for (var i = 0; i < inLength; i++) {
      var randomPoz = Math.floor(Math.random() * options.charSet.length);
      randomString += options.charSet.substring(randomPoz, randomPoz + 1);
    }

    return randomString;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.randomString;
  }
})();
