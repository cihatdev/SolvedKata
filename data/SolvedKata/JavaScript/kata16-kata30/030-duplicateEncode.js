// function duplicateEncode(word) {
//   let last = "", output = [], repeat = [];
//   [...word].forEach(i => {
//     repeat.push(letters[0]);
//     if (i !== last) {
//       output.push(')');
//       console.log(output);
//       last = i
//     }
//     else {
//       output += "(";
//       last = i;
//     }
//   });
//   return output;
// }
function duplicateEncode(word) {
  var letterCount = [];
  var letters = word.toLowerCase().split('');
  letters.forEach(function (letter) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  });
  console.log(letters);

  console.log(letterCount);
  return letters.map(function (letter) {
    return letterCount[letter] === 1 ? '(' : ')';
  }).join('');
}


let out = duplicateEncode(("recede"));
console.log(out);


// let sdaf = ['Fire', 'Air', 'Water'];
// console.log(sdaf.join("-"));