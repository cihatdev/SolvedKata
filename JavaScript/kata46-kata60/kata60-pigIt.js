// function pigIt(str) {
//   let arrStr = str.split(" "), res = [];
//   console.log(arrStr);
//   arrStr.forEach(element => {
//     res.push(element.split("").reverse().concat(['a', 'y']).join(""))
//   });
//   return res.join(" ")
// }

// function firstItem(str) {
//   let first = [];
//   str.split(" ").forEach(element => {
//     first.push(element.split("").splice(0, 1).join(""));
//   });
//   return first
// }

// function pigIt(str) {
//   let first = firstItem(str);
//   console.log(first);
//   let arr = str.split(" ");
//   let newArr = []
//   arr.forEach(element => {
//     console.log(element.split("").splice(0, 1));

//   });



// }

function pigIt(str) {
  let newArr = [];
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != '?' && arr[i] != '!') {
      let word = arr[i];
      let letter = word.charAt(0);
      let newWord = word.slice(1) + letter + "ay";
      newArr.push(newWord);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr.join(" ");
}


console.log(pigIt('This is my string'));