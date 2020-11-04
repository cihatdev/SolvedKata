// function inArray(array1, array2) {
//   let i, j, result = [];
//   outer: for (j = 0; j < array1.length; j++) {
//     for (i = 0; i < array2.length; i++) {
//       if (array2[i].includes(array1[j])) {
//         result.push(array1[j]);
//         continue outer;
//       }
//     }
//   }
//   return result.sort();
// }


// function inArray(arr1, arr2) {
//   return arr1.filter(function (needle) {
//     return arr2.some(function (haystack) {
//       return haystack.indexOf(needle) > -1;
//     });
//   }).sort();
// }

function inArray(array1, array2) {
  return array1
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
}


function inArray(a1, a2) {
  var str = a2.join(' ');
 
  return a1.filter(s => str.indexOf(s) !== -1).sort();
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
a1 = ["xyz", "live", "strong"]
console.log('inArray(a1, a2)', inArray(a1, a2))