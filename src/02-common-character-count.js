/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let common = 0;
  let string2 = s2;
  const arrS1 = s1.split('');
  for (let i = 0; i < arrS1.length; i++) {
    common += string2.includes(arrS1[i]);
    string2 = string2.replace(arrS1[i]);
  }
  return common;
}

module.exports = getCommonCharacterCount;
