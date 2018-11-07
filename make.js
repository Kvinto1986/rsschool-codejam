module.exports = function make(...args) {
  const arr = Array.from(args);
  if (typeof arr[arr.length - 1] !== 'function') {
    return make.bind(null, ...args);
  }
  const func = arr[arr.length - 1];
  arr.splice([arr.length - 1], 1);
  return arr.reduce((sum, curr) => func(sum, curr));
};
