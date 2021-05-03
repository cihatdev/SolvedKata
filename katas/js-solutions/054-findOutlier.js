// function findOutlier(integers) {
//   let evenArr = [], oddArr = [];
//   integers.forEach(element => {
//     if (element % 2 === 0) {
//       evenArr.push(element)
//     }
//     else {
//       oddArr.push(element);
//     }
//   });
//   console.log(oddArr);
//   if (oddArr.length < evenArr.length) {
//     return Number(oddArr.join())
//   } else {
//     return Number(evenArr.join())
//   }
// }


// function findOutlier(integers) {
//   const even = integers.filter(int => int % 2 === 0);
//   const odd = integers.filter(int => int % 2 !== 0);
//   return even.length === 1 ? even[0] : odd[0];
// }


function findOutlier(integers) {
  var res;
  var odd = integers.filter(function (e) {
    if (e % 2 != 0) {
      res = e;
    };
    return e % 2 == 0;
  });

  return odd.length > 1 ? res : odd.pop();
}

// function missingValues(arr) {
//   let x = 0;
//   let y = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.filter(a => a === arr[i]).length === 2) y = arr[i]
//     if (arr.filter(b => b === arr[i]).length === 1) x = arr[i]
//   }
//   return x * x * y;
// }




console.log(findOutlier([1, 1, 44, 1, 1, 3, 5, 67]));