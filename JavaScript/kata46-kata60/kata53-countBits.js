function countBits(number) {
  let counter = 0;
  let bin = number.toString(2);
  bin.split("").forEach(element => {
    console.log(typeof element);
    element === '1' ? counter += 1 : ""
  });
  return counter
}

// countBits = n => n.toString(2).split('0').join('').length;

// function countBits(n) {
//   for(c=0;n;n>>=1)c+=n&1
//   return c;
// }

console.log(countBits(7));