function gap(num) {
  let bin = Math.abs(num).toString(2), finalMax = 0, currenMax;
  console.log(bin);
  let isOne;
  for (let i = 0; i < bin.length; i++) {
    while (bin[i] == 1) {
      isOne = true;
    }
  }

  for (let i = 0; i <= bin.length; i++) {
    currenMax = 0;
    while (bin[i] === '0') {
      ++currenMax && ++i;
    }
    finalMax = Math.max(finalMax, currenMax);
  }
  return finalMax
}


function gap2(number) {
  let binary = (number >>> 0).toString(2), // convert to binary
    regex = /(?!1)(0+)(?=1)/g; // regex to match zeros between 1s

  let matches = binary.match(regex);

  return matches ? matches.reduce(function (carry, current) {
    return carry.length > current.length ? carry : current;
  }).length : 0;
}
console.log(gap(20));