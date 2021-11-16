const {findAddendPairs} = require('./day1-sum.js');

describe('addends', () => {
  const nums = [1721, 979, 366, 299, 675, 1456];
  xit('should find single pair of addends', () => {
    expect(findAddendPairs(2020, nums)).toEqual([[1721, 299]]);
  });
})
