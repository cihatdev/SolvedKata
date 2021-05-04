// const isSquare = function (n) {
//   let number = Number.parseFloat(Math.sqrt(n)).toFixed(2);
//   if (((number).split(".")[1]) <= 0) {
//     return true
//   } else {
//     return false;
//   }
// };

// const isSquare = n => Number.isInteger(Math.sqrt(n));

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

// const isSquare = n => Math.sqrt(n) % 1 === 0

console.log(isSquare(25));
