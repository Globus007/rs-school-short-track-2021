/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encoded = '';
  let char = str[0] ? str[0] : '';
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (char === str[i]) {
      count++;
    } else {
      count = count > 1 ? count : '';
      encoded += count + char;
      char = str[i];
      count = 1;
    }
  }
  count = count > 1 ? count : '';
  encoded += count + char;
  return encoded;
}

module.exports = encodeLine;
