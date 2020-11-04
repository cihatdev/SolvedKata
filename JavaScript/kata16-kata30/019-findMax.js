// function getCount(str) {
//   let vowelsCount = 0;
//   let vowelLetter = ['a', 'e', 'i', 'o', 'u'];
//   for (let i = 0; i < vowelLetter.length; i++) {
//     str.split('').forEach(strIndex => {
//       if (vowelLetter[i] == strIndex) {
//         vowelsCount++;
//       }
//     });
//   }
//   console.log();
//   return vowelsCount;
// }


function findMax(arr) {
  arr.sort((a, b) => b - a);
  return arr[0]
}

let out = findMax([1, 2, 3, 4, 5]);
console.log(out);