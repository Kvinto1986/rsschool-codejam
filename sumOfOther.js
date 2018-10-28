module.exports = (array) => {
  const val = [];
  for (let i = 0; i < array.length; i += 1) {
    let count = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (i !== j) count += array[j];
    }
    val.push(count);
  }
  return val;
};
