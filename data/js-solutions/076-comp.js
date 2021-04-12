// function comp(array1, array2) {
//   let result = true;
//   array2 = array2.map(a => Math.sqrt(a))
//   array1 = array1.sort((a, b) => a - b)
//   array2 = array2.sort((a, b) => a - b)
//   console.log(array1);
//   console.log(array2);

//   array2.forEach(element => {
//     if (!array1.includes(element)) {
//       result = false;
//     }
//   });
//   return result
// }



// function comp(array1, array2) {
//   var result = true;
//   //declare a variable called result
//   //two nested loops (forEach), starting with b
//   array2.forEach(function (x) {
//     if (!array1.includes(Math.sqrt(x))) {
//       result = false;
//     }
//   }, 0);
//   //for each element in b, we can find the square root and see if it exists in array a
//   //if it's found, assign true to a variable
//   //if none is found, assign false to the variable and return the variable
//   return result;
// }


// function comp(array1, array2) {
//   if (!array1 || !array2) return false
//   console.log([...array1]);
//   const a1 = [...array1].sort((a, b) => a - b)
//   const a2 = [...array2].sort((a, b) => a - b)
//   const a1Squared = a1.map(number => number ** 2)
//   return JSON.stringify(a1Squared) === JSON.stringify(a2)
// }


// function comp(array1, array2) {
//   if (array1 == null || array2 == null) return false;
//   array1.sort((a, b) => a - b);
//   array2.sort((a, b) => a - b);
//   return array1.map(v => v * v).every((v, i) => {
//     console.log(i);
//     return v == array2[i]
//   });
// }


// const comp = (array1, array2) =>
//   Array.isArray(array1) &&
//   Array.isArray(array2) &&
//   array1.every(item => {
//     const index = array2.indexOf(Math.pow(item, 2))
//     return index > -1 ? array2.splice(index, 1) : false
//   })

function comp(a1, a2) {
  if (a1 == null || a2 == null) return false;
  a1 = a1.sort(function (a, b) { return b < a });
  a2 = a2.sort(function (a, b) { return b < a });
  for (var i in a1) if (Math.pow(a1[i], 2) != a2[i]) return false;
  return true;
}


let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];

console.log(comp(a1, a2));
// comp(a1, a2)
// console.log('comp(a1, a2)', comp(a1, a2))
