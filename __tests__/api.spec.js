const nx = require('@feizheng/next-js-core2');
require('../src/next-random-string');

describe('api.basic test', () => {
  test('nx.randomString', function () {
    for (var i = 0; i < 10; i++) {
      expect(nx.randomString(10).length).toBe(10);
    }

    console.log(nx.randomString(8));
  });
});
