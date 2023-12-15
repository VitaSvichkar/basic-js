const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined || date === null) {
    throw new Error('Unable to determine the time of year!');
  }

  if (!(date instanceof Date) || isNaN(date)) {
    throw new Error('Invalid date!');
  }
    
  const winter = [11, 0, 1];
  const spring = [2, 3, 4];
  const summer = [5, 6, 7];
  const autumn = [8, 9, 10];

    const month = date.getMonth();

    if (winter.includes(month)) {
      return 'winter';
    }
    if (spring.includes(month)) {
      return 'spring';
    }
    if (summer.includes(month)) {
      return 'summer';
    }
    if (autumn.includes(month)) {
      return 'autumn';
    }
}
getSeason(new Date(2020, 02, 31));

module.exports = {
  getSeason
};
