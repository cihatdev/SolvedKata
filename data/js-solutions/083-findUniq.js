// function findUniq(arr) {
//   console.log(arr);
//   arr = arr.sort((a, b) => b - a)
//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
//       return arr[i]
//     }
//   }
// }


// function findUniq(arr) {
//   arr.sort((a, b) => a - b);
//   return arr[0] == arr[1] ? arr.pop() : arr[0]
// }



// function findUniq(arr) {
//   let [a, b, c] = arr.slice(0, 3);
//   if (a != b && a != c) return a;
//   for (let x of arr) if (x != a) return x
// }


function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}


// function findUniq(arr) {
//   uniqueNumber = [];
//   var sortedArr = arr.sort(function (a, b) { return a - b });
//   for (i = 0; i < sortedArr.length; i++) {
//     if (sortedArr[i] !== sortedArr[i + 1] && sortedArr[i] !== sortedArr[i - 1]) {
//       uniqueNumber.push(sortedArr[i]);
//     }
//   }
//   return uniqueNumber[0];
// }

console.log('findUniq([8, 8, 8, 8, 8, 8, 8, 7 ])', findUniq([7, 8, 8, 8, 8, 8, 8, 8]))