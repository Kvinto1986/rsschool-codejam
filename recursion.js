
module.exports = function recursion(obj, i = 0, arr = []) {
  const count = i + 1;
  if (typeof arr[i] === 'undefined') arr[i] = [];
  arr[i].push(obj.value);
  if (typeof obj.left === 'object') {
    recursion(obj.left, count, arr);
  }
  if (typeof obj.right === 'object') {
    recursion(obj.right, count, arr);
  }
  return arr;
};
