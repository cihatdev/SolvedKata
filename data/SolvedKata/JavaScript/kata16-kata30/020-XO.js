//my solutions
// function XO(str) {
//   let newStr = str.toLowerCase().split('');
//   let counterX = 0; counterO = 0;
//   newStr.forEach(item => {
//     if (item == 'x') {
//       counterX++;
//     }
//     if (item == 'o') {
//       counterO++;
//     }
//   });
//   if (counterX === counterO) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

// return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;


let out = XO('xfdgdfxodfgdfgodfgdfg');
console.log(out);