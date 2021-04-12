// input 2 numbers 
// assumptions always 2 numbers, cant be more then 50000

function solve(a, b) {
  // figure out all prime numbers into an Array
  let primeNumbers = [];
  for (let i = a; i <= b; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  const index = primeNumbers.indexOf(0)
  if (index > -1) {
    primeNumbers.splice(index, 1)
  }
  // console.log(primeNumbers);
  //console.log(primeNumbers);
  // filter what prime numbers pass digit 
  let finalPrimes = [];
  finalPrimes = primeNumbers.filter(digitsTest);
  // return length of array
  console.log(finalPrimes)
  return finalPrimes.length;
  // output is numbers
}
function digitsTest(value) {
  let temp = value.toString();
  console.log(temp.split(""));
  do {
    // turn into String
    let stringValue = value.toString();
    // split all digits into array
    let stringArray = stringValue.split("")
    // square all digits while adding them up
    value = stringArray.reduce(addSquares, 0);
  } while (value.toString().length > 1);
  if (value === 1) {
    return true;
  }
  return false;
}
function addSquares(total, current) {
  current = parseInt(current);
  return total + Math.pow(current, 2);
}
// https://www.thepolyglotdeveloper.com/2015/04/determine-if-a-number-is-prime-using-javascript/
function isPrime(value) {
  if (value === 1) {
    return false;
  }
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
}


console.log(solve(0, 25));

// function solve(a, b) {
//   let arr = [];
//   for (let i = a; i <= b; i++) {
//     for (let j = 2; j <= i; j++) {
//       if (i % j === 0) {
//         break;
//       }
//       else {
//         arr.push(i)
//         break
//       }
//     }
//   }
//   console.table(arr);
// }


