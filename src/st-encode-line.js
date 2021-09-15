import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
  str = str+' ';
  let i = 0;
  let currentMult = 0;
  let newStr = '';
  let currentSymbol = str[0];
  while(i < str.length){
    if(currentSymbol==str[i]){
      currentMult++;
    }else{
      newStr+= currentMult != 1 ? currentMult+currentSymbol:currentSymbol;
      currentSymbol = str[i];
      currentMult = 1;
    }
    i++;
  }
  return newStr;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
