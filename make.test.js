const assert = require('assert');

Object.freeze(assert);
const make = require('./make.js');

describe('make', () => {
  it('test1', () => {
    const sum = (a, b) => a + b;
    const value = make(15)(34, 21, 666)(41)(sum);
    assert.equal(value, 777);
  });
  it('test2', () => {
    const sum = (a, b) => a - b;
    const value = make(999)(99, 100, 700)(10)(sum);
    assert.equal(value, 90);
  });
  it('test3', () => {
    const sum = (a, b) => a * b;
    const value = make(5)(4, 5, 2)(3)(sum);
    assert.equal(value, 600);
  });
  it('test4', () => {
    const sum = (a, b) => a / b;
    const value = make(1000)(2, 5, 10)(5)(sum);
    assert.equal(value, 2);
  });
});
