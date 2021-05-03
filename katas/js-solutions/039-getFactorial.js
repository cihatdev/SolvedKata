function getFactorial(number) {
  let res = 1;
  for (let i = 1; i <= number; i++) {
    res *= i;
  }
  return res;
}

function getPrimes(n) {
  const res = []
  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      res.push(i)
      n = n / i
    }
  }
  if (n > 1) {
    res.push(n)
  }
  return res
}



function result(arr) {
  var letterCount = [], result = "";
  arr.forEach(function (letter) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;

  });

  console.table(letterCount);
  for (const key in letterCount) {
    if (letterCount[key] === 1) {
      letterCount[key] = "";
    }
    console.log(key);
    result += `${key}^${letterCount[key]} * `
  }
  let ne = result.split(' ')
  let remove = ne.splice(ne.length - 2, 2);
  console.log(remove);
  console.log(ne);
  return ne.join(" ")
}







function decomp(n) {
  let factorial, resArr;
  factorial = getFactorial(n);
  console.log(factorial);
  resArr = getPrimes(factorial);
  console.log(resArr);
  console.log(result(resArr));
}





let out = decomp(25);//"2^15 * 3^6 * 5^3 * 7^2 * 11 * 13 * 17"




/**
 *
 *   const intersection = new Set();

  for (var element of arr) {
    if (!intersection.has(element)) {
      intersection.add(element);
    }
  }
  console.table(intersection);

  let output = [];
  for (let pFactor in arr) {
    if (intersection[pFactor] === 1) {
      output.push(pFactor)
    } else {
      output.push(`${pFactor}^${intersection[pFactor]}`)
    }
  }
  console.log(output);
  return output.join(' * ');

 */



/**
 * function duplicateEncode(word) {
  var letterCount = [];
  var arr = word.toLowerCase().split('');
  letters.forEach(function (letter) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  });
  console.log(letters);

  console.log(letterCount);
  return letters.map(function (letter) {
    return letterCount[letter] === 1 ? '(' : ')';
  }).join('');
}
 */