// Función auxiliar para verificar si un número es par
function isEven(num) {
  return num % 2 === 0;
}

// Función auxiliar para obtener las vocales de una cadena
function getVowels(str) {
  const vowels = 'aeiouAEIOU';
  return str.split('').filter(char => vowels.includes(char)).join('');
}

/**
 * Check to see if all elements in an array
 * are even numbers.
 * @param {number[]} input - The array to check.
 * @returns {boolean} - True if all elements are even, false otherwise.
 */
function allEven(input) {
  return input.every(number => isEven(number));
}

/**
 * Check to see if all elements in an array
 * are of the same type.
 * @param {Array} input - The array to check.
 * @returns {boolean} - True if all elements are of the same type, false otherwise.
 */
function allSameType(input) {
  const firstType = typeof input[0];
  return input.every(element => typeof element === firstType);
}

/**
 * Check to see if every element in the matrix is
 * an array and that every element in the array is
 * greater than 0.
 * @param {Array[]} input - The matrix to check.
 * @returns {boolean} - True if conditions are met, false otherwise.
 */
function positiveMatrix(input) {
  return input.every(row => Array.isArray(row) && row.every(element => element > 0));
}

/**
 * Check that all items in an array are strings
 * and that they all only contain the same vowels.
 * @param {string[]} input - The array to check.
 * @returns {boolean} - True if conditions are met, false otherwise.
 */
function allSameVowels(input) {
  return input.every((str, index) => {
    // Verifica que cada elemento sea una cadena y que las vocales sean las mismas que el primer elemento
    return typeof str === 'string' && (index === 0 || getVowels(str) === getVowels(input[0]));
  });
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
