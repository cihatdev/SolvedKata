function moveZeros(arr) {
  let newArr = Object(arr).filter((x) => x !== 0)
  let count = arr.length - newArr.length

  for (let i = 0; i < count; i++) {
    newArr.push(0);
  }
  return newArr;
}


var moveZeros = function (arr) {
  let result = arr.filter(c => c !== 0)
  let count = arr.length - result.length

  return result.concat(Array(count).fill(0))
}

// function moveZeros(nums) {
//   var len = nums.length, i = nums.indexOf(0);
//   while (~i && i < --len) {
//     nums.splice(i, 1);
//     nums.push(0);
//     i = nums.indexOf(0);
//   }
//   console.log(nums);
//   return nums
// }


console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));