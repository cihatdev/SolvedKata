// function twoSum(numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length; j++) {
//       if (target === numbers[i] + numbers[j] && i != j) {
//         return [i, j]
//       }
//     }
//   }
// }


// function twoSum(numbers, target) {
//   for (var i = 0; i < numbers.length - 1; i++) {
//     for (var j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) return [i, j];
//     }
//   }
// }


function twoSum(numbers, target) {
  var tmp, hash = {};
  numbers.forEach(function (a, i) {
    hash[a] = i;
    console.log(hash);
  })
  for (var i = 0; i < numbers.length; i++) {
    tmp = target - numbers[i];
    if (typeof hash[tmp] !== 'undefined') return [i, hash[tmp]]
  }
}

console.log('twoSum([1, 2, 3], 4)', twoSum([2, 2, 3], 4))