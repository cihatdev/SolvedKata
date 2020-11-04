'use strict';
// function countKprimes(k, start, end) {
//   // your code
// }
// function puzzle(s) {
//   // your code
// }

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

function countKprimes(k, start, end) {
  const res = []
  for (let i = start; i <= end; i++) {
    const prims = getPrimes(i)
    if (prims.length === k) {
      res.push(i)
    }
  }
  return res
}

// let out = countKprimes(2, 0, 100);//from 2 to 100
let out = countKprimes(5, 500, 600)//from 500 to 600
console.log(out);



function puzzle(s) {
  let res = 0
  const aa = countKprimes(1, 2, s)
  const bb = countKprimes(3, 2, s)
  const cc = countKprimes(7, 2, s)
  const al = aa.length
  const bl = bb.length
  const cl = cc.length

  for (let i = 0; i < al; i++) {
    for (let j = 0; j < bl; j++) {
      for (let k = 0; k < cl; k++) {
        if (aa[i] + bb[j] + cc[k] === s) {
          res++
        }
      }
    }
  }
  return res
}
