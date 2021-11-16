const {day1Data} = require('./day1-parse');

describe('parse data', () => {
  it('should parse data to integers', () => {
      let result = day1Data();
      expect(result).toEqual([1721, 979, 366, 299, 675, 1456]);
  });
})
