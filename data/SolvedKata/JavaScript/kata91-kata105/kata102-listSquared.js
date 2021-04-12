function listSquared(start, finish) {
  let result = [];
  for (let i = start; i < finish; i++) {
    let sum = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) sum += j * j;
    }
    temp = Number.isInteger(Math.sqrt(sum));
    if (temp) result.push([i, sum]);
  }
  return result
}


let result = listSquared(1, 250);