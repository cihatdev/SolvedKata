// function zeros(n) {
//   let res = 1;
//   for (let i = 1; i <= n; i++) {
//     res *= i
//   }
//   Math.log(res);
// }



function zeros(n) {
  var exponent = Math.floor(Math.log(n) / Math.log(5));
  var sum = 0;
  for (var i = 1; i <= exponent; i++) {
    var num = Math.pow(5, i);
    sum += Math.floor(n / num);
  }
  return sum;
}



function zeros(n) {
  var zs = 0;
  while (n > 0) {
    n = Math.floor(n / 5);
    zs += n
  }
  return zs;
}

console.log(zeros(30));