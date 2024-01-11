import nx from '@jswork/next';
const defaults = {
  charSet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
};

nx.randomString = function (inLength, inOptions) {
  var options = nx.mix(null, defaults, inOptions);
  var randomString = '';
  for (var i = 0; i < inLength; i++) {
    var randomPoz = Math.floor(Math.random() * options.charSet.length);
    randomString += options.charSet.substring(randomPoz, randomPoz + 1);
  }

  return randomString;
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.randomString;
}

export default nx.randomString;
