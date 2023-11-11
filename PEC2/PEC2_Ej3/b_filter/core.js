function onlyEven(array) {
  return array.filter(number => number % 2 === 0);
}

function onlyOneWord(array) {
  return array.filter(word => !/\s/.test(word));
}

function positiveRowsOnly(array) {
  return array.filter(row => row.every(number => number > 0));
}

function allSameVowels(array) {
  const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);

  return array.filter(word => {
    const lowercasedWord = word.toLowerCase();
    const vowels = Array.from(new Set(lowercasedWord)).filter(char => vowelsSet.has(char));

    return vowels.length === 1;
  });
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
