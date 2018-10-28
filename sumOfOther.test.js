const assert = require('assert');
const result = require('./sumOfOther.js');

describe('result', () => {
  it('test1', () => {
    const arr = result([2, 3, 4, 1]);
    assert.deepEqual(arr, [8, 7, 6, 9]);
  });

  it('test2', () => {
    const arr = result([5, 10, 20, 1, 6, 9, 15]);
    assert.deepEqual(arr, [61, 56, 46, 65, 60, 57, 51]);
  });

  it('test3', () => {
    const arr = result([15, 1, 320, 4, 16, 99, 115]);
    assert.deepEqual(arr, [555, 569, 250, 566, 554, 471, 455]);
  });

  it('test4', () => {
    const arr = result([1, 1, 1, 1, 1, 1, 1, 1]);
    assert.deepEqual(arr, [7, 7, 7, 7, 7, 7, 7, 7]);
  });
});
