// Pozitif bir n> 1 sayısı verildiğinde, n'nin asal faktör ayrışımını bulun. Sonuç, aşağıdaki biçime sahip bir dize olacaktır:

//   "(p1 ** n1) (p2 ** n2) ... (pk ** nk)"
// burada a ** b, a'nın b kuvvetine karşılık gelir

// artan sırada p (i) ve n (i) 1 ise n (i) boş.

// Örnek: n = 86240, fr "(2 ** 5) (5) (7 ** 2) (11)" döndürmelidir

// function primeFactors(n) {
//   let coun = 0,
//     arr = [];
//   for (let i = 1; i < n; i++) {
//     while (n % i == 0) {
//       coun++;
//       n /= i;
//     }
//     if (coun == 0) {
//       continue;
//     }
//     arr.push(String.foröat(cout > 1 ? "({0}**{1})" : "({0})", i, coun))
//   }
//   console.log(arr);
//   return arr
// }

// function primeFactors(n) {
//   while (n % 2 == 0) {
//     console.log(2 + " ");
//     n /= 2;
//   }
//   for (let i = 0; i <= Math.sqrt(n); i += 2) {
//     while (n % i == 0) {
//       console.log(i + " ");
//       n /= i;
//     }
//   }
//   if (n > 2) {
//     console.log(n);
//   }
// }

// function primeFactors(n) {
//   let arrPrime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79];
//   let divisor = 2,
//     divided = n,
//     arr = [],
//     count = 0, out = "";
//   while (divisor < n) {
//     if (divided % divisor == 0) {
//       arr.push(divisor)
//       divided /= divisor;
//       console.log(divisor);
//     }
//     else {
//       divisor++;
//     }
//   }
//   for (const i in arr) {
//     for (const j in arrPrime) {
//       if (arr[i] == arrPrime[j]) {
//         if (temp === arr[i]) {

//           count++;
//           console.log(temp);

//         }
//         var temp = arr[i];
//       }
//     }
//   }
//   console.log(count);
//   // let news = arr.filter(num => num != ",")
//   // console.log(news);
//   // arr.slice(indexOf(map(",")), 1)
//   return arr;
// }


function primeFactors(n) {
  var ans = "";
  var k = 2;
  var c = 0;
  var i = 0;

  while (k <= n) {
    while (n % k == 0) {
      n /= k;
      c++;
    }
    if (c == 0) {
      k++;
      i++;
      continue;
    }

    if (c == 1) { ans += `(${k})` }
    else ans += `(${k}**${c})`
    c = 0;
    k++;
    i++;
  }

  return ans;
}


let out = primeFactors(86240);
console.log(out);

// arr.forEach(index => {
//   if (arrPrime.includes(index)) {
//     count++;
//   }
// })