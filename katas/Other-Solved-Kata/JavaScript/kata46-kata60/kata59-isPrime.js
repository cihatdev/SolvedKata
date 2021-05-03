// function isPrime(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
//   return num > 1;
// }



const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}




console.log(isPrime(2));