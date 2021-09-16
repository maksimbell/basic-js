import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let currentMail = email;
  while (currentMail.indexOf('@') != -1) {
    email = currentMail.slice(0, currentMail.indexOf('@')+1);
    currentMail = currentMail.replace(email,'');
  }
  return currentMail;
}
