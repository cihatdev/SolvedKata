// function arrayDiff(a, b) {
//   a.map(item => {
//     for (let i = 0; i < b.length; i++) {
//       if (item == b[i]) {
//         a.splice(a.indexOf(item), 1);
//         break;
//       }
//     };
//   });
//   console.log(a);
//   return a;
// }





// function arrayDiff(a, b) {
//   var ans = [];
//   for (let i = 0; i < a.length; i++) {
//     if (b.indexOf(a[i] == -1)) {
//       ans.push(a[i])
//     }
//   }

//   for (let i = 0; i < b.length; i++) {
//     if (a.indexOf(b[i] === - 1)) {
//       ans.push(b[i])
//     }
//   }
//   return ans;
// }

// function arrayDiff(a, b) {
//   return a.filter(x => {
//     return b.indexOf(x) == -1;
//   })
// }



// function arrayDiff(a, b) {
//   b.forEach(item => {
//     a.forEach(item2 => {
//       if (item == item2) {
//         a.splice(a.indexOf(item), 1);
//         item2 = " ";
//       }
//     });
//   });
//   console.log(a);
//   return a;
// }



// function arrayDiff(a, b) {
//   let out = a.filter(e => !b.includes(e));
//   return out;
// }



function arrayDiff(a, b) {
  return a.filter((v) => b.indexOf(v));
}
let out = arrayDiff([10, -14, 3, 16, -19, 16, 3, -12, -9, 1, 1], [1, -9, 10, -12, 3]);
console.log(out);
