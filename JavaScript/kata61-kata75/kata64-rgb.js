// function rgb(r, g, b) {
//   let hexStringR = r.toString(16).toUpperCase();
//   let hexStringG = g.toString(16).toUpperCase();
//   let hexStringB = b.toString(16).toUpperCase();
//   if (r > 255) {
//     hexStringR = 'FF';
//   }
//   if (g > 255) {
//     hexStringG = 'FF';
//   }
//   if (b > 255) {
//     hexStringB = 'FF';
//   }
//   if (r <= 0) {
//     hexStringR = '00';
//   }
//   if (g <= 0) {
//     hexStringG = '00';
//   }
//   if (b <= 0) {
//     hexStringB = '00';

//   }
//   return hexStringR + hexStringG + hexStringB;
// }



const checkRange = num => Math.min(255, Math.max(num, 0))

const rgb = (...args) => args.slice(0, 3)
  .map(x => checkRange(x)
    .toString(16)
    .toUpperCase()
    .padStart(2, '0'))
  .join('')


// function rgb(r, g, b) {
//   return toHex(r) + toHex(g) + toHex(b);
// }

// function toHex(d) {
//   if (d < 0) { return "00"; }
//   if (d > 255) { return "FF"; }
//   return ("0" + (Number(d).toString(16))).slice(-2).toUpperCase()
// }


// function rgb(r, g, b){
//   return [r,g,b].map(function(x) {
//     return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
//   }).join('').toUpperCase();
// }


// function rgb(r, g, b){
//   function toHex(a) { 
//     if (a <= 0) return '00';
//     else if (a >= 255) return 'FF';
//     else return a.toString(16).toUpperCase();
//   }
//   return toHex(r) + toHex(g) + toHex(b);
// }

console.log(rgb(39, 186, 258));