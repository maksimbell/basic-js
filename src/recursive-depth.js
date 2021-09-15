import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {

  calculateDepth(a){

    var max = 1;
    for(let i=0;i<a.length;i++){
      if(Array.isArray(a[i])){
        var depth = calculateDepth(a[i])+1;
        if(depth>max){
          max = depth;
        }     
      } 
    }
    return max;
  }
  
}
