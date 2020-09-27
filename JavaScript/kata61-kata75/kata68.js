function firstNonRepeatingLetter(strng) {
  strng = strng.toLowerCase();
  let arrStr = [], set = [];
  arrStr = strng.split("");
  console.log(arrStr);
  arrStr.forEach(element => {
    arrStr.forEach(element2 => {
      if (element === element2 || element === element2.toLowerCase() || element === element2.toLowerCase()) {
        set[element] = (set[element] || 0) + 1;
      }
    });
  });
  console.log(set);
  if (arrStr.length === 0) {
    return ""
  }
  for (const [key, value] of Object.entries(set)) {
    if (value === 1) {
      return key
    }
  }
  for (const [key, value] of Object.entries(set)) {
    if (value !== 1) {
      return ""
    }
  }
}

// function firstNonRepeatingLetter(str) {
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
//       return char;
//     }
//   }
//   return "_";
// }



// function firstNonRepeatingLetter(str) {
//   var counter = {};
//   for (let i = 0; i < str.length; i++) {
//     if (counter[str[i]]) {
//       counter[str[i]]++;
//     } else {
//       counter[str[i]] = 1;
//     }
//   }
//   for (let i = 0; i < str.length; i++) {
//     if (counter[str[i]] === 1) {
//       return str[i];
//     }
//   }
// }


// const firstNonRepeatingLetter = s => {
//   const index = s
//     .toLowerCase()
//     .split('')
//     .findIndex((char, _, s) => s.indexOf(char) === s.lastIndexOf(char))
//   return index === -1 ? '' : s[index]
// }



// function firstNonRepeatingLetter(strng) {
//   let arrStr = [], acc = [];
//   arrStr = strng.split("");
//   console.log(arrStr);
//   arrStr.forEach(element => {
//     arrStr.forEach(element2 => {
//       if (element === element2 || element === element2.toLowerCase() || element === element2.toLowerCase()) {
//         acc[element] = (acc[element] || 0) + 1;
//       }
//     });
//   });
//   console.log(acc);
// }




// function firstNonRepeatingLetter(s) {
//   var t = s.toLowerCase();
//   for (var x = 0; x < t.length; x++)
//     if (t.indexOf(t[x]) === t.lastIndexOf(t[x]))
//       return s[x];
//   return "";
// }



console.log(firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!"));