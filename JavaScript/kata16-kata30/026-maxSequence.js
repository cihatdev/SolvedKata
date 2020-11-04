var maxSequence = function (arr) {
  let currentSum = 0;
  let maxSum = 0;
  for (const i of arr) {
    let currentNum = i;
    currentSum = Math.max((currentSum + currentNum), 0);
    maxSum = Math.max(currentSum, maxSum);
    console.log(currentSum);
  }
  return maxSum;
}


//other solutions
// var maxSequence = function(arr){
//   var currentSum = 0;
//   return arr.reduce(function(maxSum, number){
//       currentSum = Math.max(currentSum+number, 0);
//       return Math.max(currentSum, maxSum);
//   }, 0);
// }



let out = maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(out);