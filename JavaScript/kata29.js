// queueTime ([5,3,4], 1)
// // 12 döndürmeli
// // çünkü 1 kasa olduğunda, toplam süre sadece zamanların toplamıdır

// queueTime ([10,2,3,3], 2)
// // 10 döndürmeli
// // çünkü burada n = 2 ve 2., 3. ve 4. kişiler
// // 1. kişi bitirmeden önce kuyruk biter.

// queueTime ([2,3,10]; 2)
// // 12 döndürmeli



// const queueTime = (customers, n) => {
//   let result = 0, maxTime, average;
//   result = customers.reduce((accumulator, currentValue) => { return accumulator += currentValue }, 0);
//   maxTime = Math.max(...customers)
//   console.log(maxTime);
//   console.log(result);
//   console.log(n);
//   average = result / n;
//   if (average == Infinity) {
//     return result
//   }
//   if (maxTime > average) {
//     return maxTime;
//   }
//   else {
//     return Math.floor(average);
//   }
// }
// function queueTime(customers, tillCount) {
//   if (!Array.isArray(customers)) {
//     throw new Error(`InvalidArgumentException: Parameter 1 must be an array, received: 
//     ${typeof customers}`);
//   } else if (!customers.every(time => Number.isInteger(time))) {
//     throw new Error(`InvalidArgumentException: Parameter 1 must be an array of integers.
//      Atleast one element in the array does not conform to this, received: ${customers}`);
//   } else if (!Number.isInteger(tillCount)) {
//     throw new Error(`InvalidArgumentException: Parameter 2 must be an integer, received:
//      ${typeof tillCount}`);
//   }

//   let tills = Array(tillCount <= 0 ? 1 : tillCount).fill(0);
//   customers.forEach(customer => {
//     const fastest = tills.indexOf(Math.min(...tills));
//     tills[fastest] += customer;
//   });
//   return Math.max(...tills);
// }


function queueTime(customers, n) {
  var w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    console.log(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w);
}

let out = queueTime([10, 2, 3, 3], 2)
console.log(out);