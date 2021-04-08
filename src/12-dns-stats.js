/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  for (let i = 0; i < domains.length; i++) {
    let str = '';
    const dns = domains[i].split('.');
    for (let j = 0; j < dns.length; j++) {
      str += `.${dns[dns.length - j - 1]}`;
      result[str] = result[str] ? (result[str] += 1) : (result[str] = 1);
    }
  }
  return result;
}

module.exports = getDNSStats;
