const uniqueInOrder = function (iterable) {
  let result = [], last = "", newArr;
  if (typeof (iterable) == 'string') {
    newArr = iterable.split('');
  }
  else {
    newArr = iterable;
  }
  newArr.forEach(i => {
    if (i !== last) {
      result.push(last = i)
    }
  });
  return result
}

console.log(typeof [1, 2, 2, 3, 3]);
let out = uniqueInOrder([1, 2, 2, 3, 3]);
console.log(out);