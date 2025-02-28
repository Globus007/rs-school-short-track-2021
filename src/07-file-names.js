/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let k;
  let isSame = false;
  let repeatNumber;
  const files = [...names];
  for (let i = 1; i < files.length; i++) {
    k = i - 1;
    while (k >= 0) {
      if (files[k] === files[i]) {
        isSame = true;
        break;
      }
      k--;
    }
    if (isSame) {
      repeatNumber = 1;
      while (k < i) {
        if (files[k] === `${files[i]}(${repeatNumber})`) {
          repeatNumber++;
        }
        k++;
      }
      files[i] = `${files[i]}(${repeatNumber})`;
      isSame = false;
    }
  }
  return files;
}

module.exports = renameFiles;
