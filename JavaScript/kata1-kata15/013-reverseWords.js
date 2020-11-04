// function reverseWords(str) {
//   return str.split("").reverse().join("").split(" ").reverse().join(" ")
// }

function reverseWords(string) {
  var words = string.split(' ');
  var result = [];
  for (var i = 0; i < words.length; i++) {
    result.push(words[i].split('').reverse().join(''));
  }
  return result.join(' ');
}

let out = reverseWords("This is an example!");
console.log("******************");
console.log(out);


