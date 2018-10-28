const assert = require('assert');
const result = require('./recursion.js');

describe('recursion', () => {
  it('test1', () => {
      const arr = result({ value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130 } } });
    assert.deepEqual(arr, [[100], [90, 120], [70, 99, 110, 130]]);
  });
});
