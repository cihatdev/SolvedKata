// function towerBuilder(nFloors) {
//   let tower = [];
//   for (let i = 0; i < nFloors; i++) {
//     tower.push(
//       " ".repeat(nFloors - i - 1)
//       + "*".repeat((i * 2) + 1)
//       + " ".repeat(nFloors - i - 1)
//     )
//   }
//   return tower;
// }


// function towerBuilder(n) {
//   return Array.from({ length: n }, function (v, k) {
//     const spaces = ' '.repeat(n - k - 1);
//     return spaces + '❤'.repeat(k + k + 1) + spaces;
//   });
// }



// function towerBuilder(nFloors) {
//   var tower = [];
//   for (var i = 0; i < nFloors; i++) {
//     tower.push(" ".repeat(nFloors - i - 1)
//       + "*".repeat((i * 2) + 1)
//       + " ".repeat(nFloors - i - 1));
//   }
//   return tower;
// }


console.table(towerBuilder(12))