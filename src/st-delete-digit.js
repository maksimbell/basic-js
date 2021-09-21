import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
    let max = 0;
    let current;
    for (let i = 0; i < n.toString().length; i++) {
        current = (n.toString().replace(n.toString().charAt(i), ''));
        if (current > max) {
            max = current;
        }
    }

    return parseInt(max);
}