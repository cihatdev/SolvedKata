// function solution(str) {
//   let newStr = "", arr = [];
//   str.length % 2 !== 0 ? newStr = str + '_' : newStr = s;
//   console.log(newStr);
//   for (let i = 0; i < newStr.length; i++) {
//     arr.push(newStr.charAt(i) + newStr.charAt(i + 1))
//     i++;
//   }
//   // console.log(arr);
//   return arr ? arr : [];
// }



function solution(str) {
  var i = 0;
  var result = new Array();
  if (str.length % 2 !== 0) {
    str = str + '_';
  }
  while (i < str.length) {
    result.push(str[i] + str[i + 1]);
    i += 2;
  }
  return result;
}

console.log('solution("abcdef")', solution("abcdef"))