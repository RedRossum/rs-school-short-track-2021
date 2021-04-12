/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {{}}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let multi = 1;
  const res = [];
  // eslint-disable-next-line no-return-assign
  str.split('').forEach((item, index) => (item === str[index + 1] ? (multi++)
    : (res.push(multi + item), multi = 1)));
  return res.join('')
    .replace(/1/g, '');
}

module.exports = encodeLine;
