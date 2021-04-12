function deleteNth(arr, n) {
  let numberCount = {}, newArr = [];
  arr.forEach(element => {
    numberCount[element] = (numberCount[element] || 0) + 1;
    console.log(numberCount);
    if (numberCount[element] <= n) {
      newArr.push(element);
    }
  });
  return newArr
}

// function deleteNth(your_array, limit) {
//   new_arr = [];
//   var counts = {};
//   your_array.forEach(function (x) {
//     counts[x] = (counts[x] || 0) + 1;
//     if (counts[x] <= limit) {
//       new_arr.push(x);
//     }
//   });
//   return new_arr;
// }


let out = deleteNth([20, 37, 20, 21], 1);
console.log(out);