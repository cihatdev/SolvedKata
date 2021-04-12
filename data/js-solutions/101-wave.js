function wave(str) {
  let resultArr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] != ' ') {
      resultArr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
    }
  }
  return resultArr;
}


// function wave(string) {
//   var result = [];
//   for (i = 0; i < string.length; i++) {
//     if (string[i] != ' ') //console.log(string.slice(0,i), string.slice(i+1))
//       result.push(string.slice(0, i) + string[i].toUpperCase() + string.slice(i + 1))
//   }
//   return result;
// }




// let temp = "";
// let arr = str.split("").map(element => element.toLowerCase());
// for (let i = 0; i < arr.length; i++) {
//   temp[arr] = arr[arr[i].toUpperCase()];
//   console.log(temp);
//   if (arr[i] == arr[i].toUpperCase()) {
//     resultArr.push(arr)
//   }
// }
// console.log(resultArr);
// str.split("").map(element => element.toLowerCase()).reduce((accumulator, currentValue, currentIndex, array) => {
//   accumulator = currentValue.toUpperCase();
//   console.log(accumulator);
// }, 0);
// console.log(resultArr);


console.log(wave("hello"));

// isRight = () => {
//   let func = wave("codewars");
//   result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
//   if (func === result) {
//     console.log("true");
//   }
// }
// isRight();