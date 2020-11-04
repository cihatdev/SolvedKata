// function narcissistic(value) {
//   let leng = String(value).split("").length, sum = 0;
//   String(value).split("").forEach(element => {
//     sum += element ** leng;
//   });
//   if (sum === value) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }


// function narcissistic(value) {
//   return ('' + value).split('').reduce(function (p, c) {
//     return p + Math.pow(c, ('' + value).length)
//   }, 0) == value;
// }

// function narcissistic(value) {
//   return value.toString()
//     .split('')
//     .map((x, i, arr) => x ** arr.length)
//     .reduce((a, b) => +a + +b)
//     === value
// }


function narcissistic(value) {
  let power = ('' + value).length;
  return [...('' + value)].reduce((a, b) => a + Math.pow(b, power), 0) === value;
}




console.log('narcissistic( 371 )', narcissistic(371))