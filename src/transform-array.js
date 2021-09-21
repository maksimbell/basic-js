import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }  
  let commands = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
  let newArr = [ ];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == commands[0]){
      i+=1;  
    }else if(arr[i] == commands[1]){
      if(i > 1 && arr[i-2] == commands[0] ){

      }else{
        newArr.pop();
      }
      
    }else if(arr[i] == commands[2]){
      if(i+1 < arr.length){
        newArr.push(arr[i+1]);
        newArr.push(arr[i+1]);
        i+=1;
      }
      
    }else if(arr[i] == commands[3]){
      if(i > 1 && arr[i-2] == commands[0]){

      }else if(newArr.length != 0){
        newArr.push(arr[i-1]);
      }
    }else{
      newArr.push(arr[i]);
    } 
  }

  return newArr;

}