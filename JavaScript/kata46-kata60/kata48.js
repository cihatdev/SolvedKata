// function findOdd(arr) {
//   const set = arr.reduce((acc, cur) => {
//     acc[cur] = (acc[cur] || 0) + 1;
//     return acc;
//   }, {});
//   console.table(set);
//   for (const [key, value] of Object.entries(set)) {
//     if (value % 2 === 1) {
//       return Number(key)
//     }
//   }
// }


const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([1, 1, 4, 4, 5, 5, 10, 1, 1, 1, 1]));