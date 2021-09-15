import { NotImplementedError } from '../extensions/index.js';

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
export default function getSeason(date) {

  function isValidDate(d) {
    return new Date(d).toString() != 'Invalid Date'
  }

  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (!isValidDate(date)) {
    throw new Error('Invalid date!');
  }


  try {
    new Date() - date
  } catch (e) {
    throw new Error('Invalid date!')
  }

  try {
    let month = date.getMonth() + 1;

    if (month == 12 || month > 0 && month < 3) {
      return 'winter';
    } else if (month > 2 && month < 6) {
      return 'spring';
    } else if (month > 5 && month < 9) {
      return 'summer';
    } else if (month > 8 && month < 12) {
      return /autumn|fall/;
    }
  } catch (e) {
    throw new Error('Invalid date!');
  }
}

// getSeason(20192701)