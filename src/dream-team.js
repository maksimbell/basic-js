import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {

    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] != 'string' || members[i] == '') {
            members.slice(i, 1);
        } else {
            members[i] = members[i].trim();
        }
    }

    function sortArray(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = (arr.length - 1); j > i; j--) {
                if (arr[j - 1].charCodeAt(0) > arr[j].charCodeAt(0)) {
                    let temp = arr[j - 1];
                    arr[j - 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
    sortArray(members);
    let dreamTeam = '';
    for (let i = 0; i < members.length; i++) {
        dreamTeam += members[i].charAt(0).toUpperCase();
    }
    return dreamTeam != '' ? dreamTeam : false;

}