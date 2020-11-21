(function () {
  require('../src');

  describe('api.basic test', () => {
    test("api",()=>{
      expect(nx.randomString(8).length).toBe(8);
      expect(nx.randomString(80).length).toBe(80);
      expect(nx.randomString(100).length).toBe(100);
      console.log(nx.randomString(10));
    })
  });
})();
