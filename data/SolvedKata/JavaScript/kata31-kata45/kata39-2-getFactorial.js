function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function getPrimeFactors(num) {
  let primeFactors = [];

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0 && isPrime(i)) {
      primeFactors.push(i);
    }
  }

  return primeFactors;
}

function decomp(n) {
  if (n < 2) return 'none';
  let output = [];
  let primeFactors = [];
  let primeFactorAndExp = {};
  let i = 2;

  while (i <= n) {
    if (isPrime(i)) primeFactors.push(i);
    i++;
  }

  for (let j = 2; j <= n; j++) {
    let currFactorial = j;

    for (let inner = 0; inner < primeFactors.length; inner++) {
      let currPrimeFactor = primeFactors[inner];

      while (currPrimeFactor <= currFactorial && currFactorial % currPrimeFactor === 0) {
        currFactorial /= currPrimeFactor;
        if (primeFactorAndExp[currPrimeFactor] === undefined) {
          primeFactorAndExp[currPrimeFactor] = 1;
        } else primeFactorAndExp[currPrimeFactor]++;
      }

      if (currPrimeFactor > currFactorial) break;
      currFactorial = j;
    }
  }

  console.log(primeFactorAndExp)
  for (let pFactor in primeFactorAndExp) {
    console.log(pFactor)
    if (primeFactorAndExp[pFactor] === 1) {
      output.push(pFactor)
    } else {
      output.push(`${pFactor}^${primeFactorAndExp[pFactor]}`)
    }
  }
  return output.join(' * ');
}

let out = decomp(17);
console.log(out);