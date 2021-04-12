function expandedForm(num) {
  let subNumArr = [], numStr = num.toString();
  for (let n = 0; n < numStr.length; n++) {
    let zeroCount = numStr.length - n - 1;
    // console.log(zeroCount);
    let x = 0;
    let subNum = numStr[n]
    if (numStr[n] !== '0') {
      while (x < zeroCount) {
        subNum = subNum + '0'
        x++;
      }
      subNumArr.push(subNum)
    }
  }
  return subNumArr.join(' + ')
}


function expandedForm(num) {
  num = String(num);
  let result = [];
  for (var i = 0; i < num.length; i++) {
    if (num[i] == 0) continue;
    else result.push(num[i] + "0".repeat(num.length - i - 1))
  }
  return result.join(" + ")
}


function expandedForm(num) {
  if (num < 10) return `${num}`;
  let over = num % (Math.pow(10, (num.toString().length - 1)));
  if (!over) return `${num}`;
  return `${num - over} + ${expandedForm(over)}`;
}



console.log('expandedForm(70304)', expandedForm(70304))