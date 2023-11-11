function sum(array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function productAll(array) {
  return array.reduce((accumulator, currentArray) => accumulator * currentArray.reduce((acc, num) => acc * num, 1), 1);
}

function objectify(array) {
  return array.reduce((obj, item) => {
    obj[item[0]] = item[1];
    return obj;
  }, {});
}

function luckyNumbers(array) {
  if (!Array.isArray(array) || array.length === 0 || !array.every(subArray => Array.isArray(subArray) && subArray.length > 0)) {
    throw new Error('Invalid input. Please provide a non-empty array of non-empty arrays.');
  }

  return array.map(subArray => Math.min(...subArray));
}


module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
