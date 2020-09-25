// function missingValues(arr) {
//   let repetitions = arr.reduce((acc, number) =>
//     ({ ...acc, [number]: (acc[number] || 0) + 1 }), {});
//   const [x, y] = Object.entries(repetitions)
//     .sort(([, repetitionA], [, repetitionB]) => repetitionA - repetitionB)
//     .map(([value]) => value);
//   console.log(x + " " + y);
//   return x ** 2 * y;
// }

// function missingValues(arr) {
//   let x = 0;
//   let y = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.filter(a => a === arr[i]).length === 2) y = arr[i]
//     if (arr.filter(b => b === arr[i]).length === 1) x = arr[i]
//   }
//   return x * x * y;
// }

// const findByCount = (array, count) =>
//   array.find(a => array.filter(b => a === b).length === count)

// const missingValues = array => {
//   const x = findByCount(array, 1)
//   const y = findByCount(array, 2)
//   return Math.pow(x, 2) * y
// }

// function checkTimes(arr, num_of_times) {
//   let number = arr.filter(element => {
//     let count = 0;
//     arr.forEach(element2 => {
//       if (element2 === element) { count++ }
//     });
//     if (count === num_of_times) {
//       return element
//     }
//   });
//   return number
// }
// function missingValues(arr) {
//   oneTime = checkTimes(arr, 1);
//   twoTimes = checkTimes(arr, 2);

//   return oneTime * oneTime * twoTimes[0]
// }

// function missingValues(arr) {
//   //coding and coding..
//   let x, y
//   x = 0;
//   y = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr.filter(a => a === arr[i]).length === 1) {
//       x = arr[i]
//     }
//   }
//   for (let j = 0; j < arr.length; j++) {
//     if (arr.filter(b => b === arr[j]).length === 2) {
//       y = arr[j]
//     }
//   }
//   return x * x * y
// }


function missingValues(arr) {
  const set = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  console.log(set);

  const sorted = Object.entries(set)
    .map((v) => [v[1], Number(v[0])])
    .sort((a, b) => a[0] - b[0]);
  console.log();

  return sorted[sorted.findIndex((v) => v[0] === 2)][1]
    * (sorted[sorted.findIndex((v) => v[0] === 1)][1] ** 2);
}




console.log(missingValues([1, 1, 1, 2, 2, 3]));