function isValidIP(str) {
  let arr = str.split(".");
  return arr.filter(item => {
    const parsedValue = parseInt(item, 10);
    if (parsedValue.toString() == item && parsedValue.toString() <= 255 && parsedValue >= 0) {
      return item;
    }
  }).length === 4;
}

// arr.forEach(element => {
//   if ((element) <= 0 || (element) >= 255) {
//     valid = false;
//   }
//   else if ((typeof element) !== Number) {
//     valid = false;
//   }
//   else if (element[0] !== '0') {
//     valid = true;
//   }
// });
// return valid;
// function isValidIP(entry) {
//   var blocks = entry.split(".");
//   if (blocks.length === 4) {
//     return blocks.every(function (block) {
//       return parseInt(block, 10) >= 0 && parseInt(block, 10) <= 255;
//     });
//   }
//   return false;
// }

// const isValidIP = (str) => str.split('.')
//   .filter((v) => {
//     const parsedValue = parseInt(v, 10);
//     console.log(parsedValue);
//     if (parsedValue.toString() === v && parsedValue <= 255 && parsedValue >= 0) {
//       return v;
//     }
//   }).length === 4;

console.log('isValidIP(\'123.456.789.0\')', isValidIP('137.255.156.100'))