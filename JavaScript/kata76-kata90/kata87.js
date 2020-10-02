function solution(number) {
  let roman = [{ M: 1000 }, { CM: 900 }, { D: 500 }, { CD: 400 },
  { C: 100 }, { XC: 90 }, { L: 50 }, { XL: 40 }, { X: 10 }, { IX: 9 }, { V: 5 }, { IV: 4 }, { I: 1 }]
    , value = 0, romanStr = "";
  for (let i = 0; i < roman.length; i++) {
    for (const key in roman[i]) {
      while (value + roman[i][key] <= number) {
        // console.log(roman[i][key]);
        value += roman[i][key]
        romanStr += key
        console.log(romanStr);
      }
    }
  }
  return romanStr
}


function solution(number) {
  let roman = {
    M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10,
    IX: 9, V: 5, IV: 4, I: 1
  }
  let ans = '';

  // for (const a in roman) {
  //   console.log(roman[a]);
  // }


  while (number > 0) {
    for (a in roman) {
      if (roman[a] <= number) {
        ans += a;
        number -= roman[a];
        break;
      }
    }
  }
  return ans;
}



console.log('solution(2008)', solution(2008))
