// function persistence(num) {
//   let counter = 0;
//   let result = 11;
//   let isTrue = true;
//   let val = String(num).split("");
//   let sec;
//   for (i in val) {
//     if (isTrue) {
//       val.reduce((i, j) => {
//         result = i * j
//         val = String(result).split("");
//         counter++;
//         if (result < 10) {
//           isTrue = false;
//         }
//       });
//     }
//   }
//   return counter;
// }

// function persistence(num) {
//   if (num.toString().length === 1) {
//     return 1;
//   }
//   var mult = 1;
//   var splitStr = num.toString().split("");
//   for (var i = 0; i < splitStr.length; i++) {
//     mult *= parseFloat(splitStr[i])
//   }
//   return 1 + persistence(parseFloat(mult));
// }

// function persistence(num) {
//   var times = 0;
//   num = num.toString();
//   while (num.length > 1) {
//     times++;
//     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//   }

//   return times;
// }



// const persistence = num => {
//   return `${num}`.length > 1
//     ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b))
//     : 0;
// }


function persistence(num) {
  for (var i = 0; num > 9; i++) {
    num = num.toString().split('').reduce((t, c) => c * t);
  }
  return i;
}


let output = persistence(39);

console.log(output);

// var deg = val.reduce((a, b) => {
//   console.log(a);
//   console.log(b);
//   let result = a * b;
//   if (result > 10) {
//     counter++;
//     val = String(result).split("");
//     val.reduce()
//   }
// })
// console.log(counter);