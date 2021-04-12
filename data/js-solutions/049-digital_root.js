// function digital_root(number) {
//   let arrNum = [], result = 10, lengt = 0, sumString = 0, sumDigits;
//   arrNum = String(number).split("");
//   lengt = String(number).split("").length;
//   console.log(arrNum);

//   for (let i = 0; i < arrNum.length; i++) {
//     result += Number(arrNum[i]);
//   }
//   sumString = result.toString();
//   if (sumString.length > 1) {
//     sumDigit = sumString.split("").map(Number);
//     var firstSumDigit = sumDigits.slice(0);
//     var lastSumDigit = sumDigits.slice(-1);
//     return firstSumDigit[0] + lastSumDigit[0];
//   }
//   else {
//     return sumDigit;
//   }
// }

// function digital_root(n) {
//   let result = 0;
//   n.toString().split('').map(n => {
//     result += Number(n)
//   })
//   return result > 9 ? digital_root(result) : result;
// }



function digital_root(n) {
  console.log((n - 1) % 9);
  return (n - 1) % 9 + 1;
}


function digital_root(n) {
  if (n < 10) return n;

  return digital_root(
    n.toString().split('').reduce(function (acc, d) { return acc + +d; }, 0));
}





function digital_root(n) {
  if (n < 10)
    return n;
  for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
    sum += Number(n[i]);

  return digital_root(sum);
}









function digital_root(n) {
  n = eval(n.toString().split('').join('+'));
  console.log(n);
  if (n > 9) {
    return digital_root(n);
  }
  return n;
}









function digital_root(n) {
  if (n < 10) return n
  return digital_root(n % 10 + digital_root(Math.floor(n / 10)))
}







function digital_root(n) {
  return --n % 9 + 1;
}








function digital_root(n) {
  // ...
  var output = []
  var s_number = n.toString();

  for (var i = 0, len = s_number.length; i < len; i += 1) {
    output.push(+s_number.charAt(i));
  }
  if (output.length === 1) {
    return output[0]
  }

  for (var i = 0, sum = 0; i < output.length; sum += output[i++]);


  return digital_root(sum)
}




console.log(digital_root1(456));






















