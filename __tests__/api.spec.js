const nx = require('@feizheng/next-js-core2');
require('../src/next-random-string');

describe('api.basic test', () => {
  test('nx.randomString', function () {
    expect(nx.randomString(8).length).toBe(8);
    expect(nx.randomString(80).length).toBe(80);
    expect(nx.randomString(100).length).toBe(100);

    console.log(
      nx.randomString(10)
    );

  });
});
