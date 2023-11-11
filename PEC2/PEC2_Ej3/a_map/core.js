function multiplyBy10(array) {
  return array.map(element => element * 10);
}

function shiftRight(array) {
  if (array.length === 0) {
    return array;
  }

  const lastElement = array.pop();
  array.unshift(lastElement);

  return array;
}

function onlyVowels(array) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  return array.map(word => word.split('').filter(char => vowels.has(char)).join(''));
}

function doubleMatrix(array) {
  return array.map(row => row.map(number => number * 2));
}


module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
