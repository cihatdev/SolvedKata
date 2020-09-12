// function rowSumOddNumbers(n) {
//   let counterPiece = 0;
//   let arr = [];
//   let counterOdd = 0;
//   for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <= i / 2; j++) {
//       if (i % 2 !== 0) {
//         arr[i] = i
//       }

//     }
//   }
//   console.log(arr);
//   return counterOdd;
//}

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
var out = rowSumOddNumbers(42);

console.log(out);





// for (let i = 0; i < n; i++) {
//   console.log(" ");
//   for (let j = 0; j <= i; j++) {
//     console.log("* ");
//   }
//   console.log("\n");
// }
// var a = '';
// var n = 10;
// var m = (n - 1);
// for (let i = 1; i <= n; i++) {
//   a = a.trim();
//   if (i % 2 !== 0) {
//     a = ' '.repeat(m) + a + (i > 1 ? ' ' : '') + i;
//     console.log(a);
//     m--;
//   }
// }

//other Method1
// function rowSumOddNumbers(n) {
//   return n**3
// }

//other Method1
// const rowSumOddNumbers = n => n * n * n;