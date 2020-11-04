// function findNb(m) {
//   let result;
//   for (let i = 0; i < ; i++) {
//     result = Math.pow(((n * (n + 1) / 2), 2)) / 2;
//     if
//     console.log(result);
//   }
// return (-1);
// }


function findNb(m) {
  let n = 0;
  let sum = 0;
  while (sum < m) {
    n++;
    sum += Math.pow(n, 3);
  }
  return sum === m ? n : -1;
}


console.log('findNb(135440716410000)', findNb(135440716410000))