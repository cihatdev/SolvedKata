// Bir dizi numaranız var. Göreviniz artan tek sayıları sıralamaktır, 
// ancak yerlerinde çift sayılar olmalıdır.
// Sıfır tek bir sayı değildir ve onu taşımanıza gerek yoktur.
//  Boş bir diziniz varsa, onu döndürmeniz gerekir.
// function sortArray(array) {
//   let newArr = [], evenArr = [], oddArr = [];
//   for (const i in array) {
//     array[i] % 2 === 0 ? evenArr.push(array[i]) : oddArr.push(array[i]);
//   }
//   oddArr.sort((x, y) => x - y);
//   console.log(evenArr);
//   for (const i in array) {
//     array[i] % 2 === 0 ? newArr.push(evenArr.shift()) : newArr.push(oddArr.shift());
//   }
//   return newArr;
// }

function sortArray(array) {
  var odd = array.filter(elem => elem % 2 !== 0).sort((a, b) => a - b);
  return array.map(elem => elem % 2 === 0 ? elem : odd.shift());
}
let out = sortArray([5, 3, 1, 8, 0]);
console.log(out);






/*
// array.reduce((element, nextValue, arr) => {
//   if (element % 2 != 0) {
//     if (element < nextValue) {
//       array.push(element);
//       console.log(array);
//       return arr;
//     }
//   }
// })
  let newArr = [];
  let oddNum = [];
  let binaryNum = [];
  array.forEach(element => {
    if (element % 2 != 0) {
      oddNum.push(element);
      oddNum.sort();
    }
    else {
      binaryNum.push(element)
    }
  })
  console.log(binaryNum);
  newArr = oddNum.concat(binaryNum);
  console.log(newArr);

  return newArr;
*/