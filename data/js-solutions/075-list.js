// function list(names) {
//   let str = '';
//   if (names.length !== 0) {
//     let last = names.pop()
//     str = names.map((val, i, arr) => {
//       if (i !== arr[arr.length - 1]) {
//         return val.name
//       }
//     }).join(', ');
//     str += str !== '' ? ' & ' + last.name : last.name;
//   }
//   return str;
// }


function list(names) {
  return names.reduce(function (prev, current, index, array) {
    if (index === 0) {
      return current.name;
    }
    else if (index === array.length - 1) {
      return prev + ' & ' + current.name;
    }
    else {
      return prev + ', ' + current.name;
    }
  }, '');
}


// function list(names) {
//   let xs = names.map(p => p.name)
//   let x = xs.pop()
//   console.log(x);
//   return xs.length ? xs.join(", ") + " & " + x : x || ""
// }

// function list(names) {
//   return names.map(function (obj, idx, arr) {
//     if (!obj.hasOwnProperty('name')) return '';
//     if (idx == arr.length - 2) return obj.name + ' & ';
//     else if (idx > arr.length - 2 || arr.length < 2) return obj.name;
//     else return obj.name + ', ';
//   }).join('');
// }


console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));


// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'
