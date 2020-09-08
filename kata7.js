// Oldukça büyük mükemmel kareler biliyor olabilirsiniz. Peki ya SONRAKİ olan?

// findNextSquareParametre olarak geçirilenden sonra bir sonraki tam tam kareyi bulan yöntemi tamamlayın .
//  Tamsayı bir tam karenin, sqrt (n) 'nin de bir tamsayı olacak şekilde bir n tamsayı olduğunu hatırlayın.

// function findNextSquare(sq) {
//   let root1;
//   let nextRoot;
//   if (Math.sqrt(sq) % 1 == 0) {
//     root1 = Math.sqrt(sq);
//     nextRoot = root1 + 1;
//   }
//   else {
//     return -1;
//   }
//   return Math.pow(nextRoot, 2);
// }

// function findNextSquare(sq) {
//   return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
// }


// function findNextSquare(sq) {
//   var number = Math.sqrt(sq);
//   if (Math.round(number) === number) {
//     return Math.pow(++number, 2)
//   }
//   return -1;
// }


function findNextSquare(sq) {
  var root = Math.sqrt(sq);
  return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}


let out = findNextSquare(729);
console.log(out);