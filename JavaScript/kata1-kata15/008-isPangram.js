// Bir pangram, alfabenin her harfini en az bir kez içeren bir cümledir.
//  Örneğin, "Hızlı kahverengi tilki tembel köpeğin üzerinden atlar" 
//  cümlesi bir pangramdır, çünkü en az bir kez AZ harflerini kullanır (durum ilgisizdir).

// Bir dizge verildiğinde, bunun bir pangram olup olmadığını tespit edin. Varsa True, değilse False döndür.
//  Sayıları ve noktalama işaretlerini göz ardı edin.

// function isPangram(string) {
//   let newString = string.split(" ");
//   var pos = 0;
//   let isValid = false;
//   newString.reduce(index => {
//     if ((index > 'a' && index < 'z') || (index > 'A' && index < 'A') && index != " ") {
//       isValid = true;
//     }
//   })
//   return isValid;
// }


function isPangram(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz"
    .split("").every(function (x) {
      return string.indexOf(x) !== -1;
    });
}

// let out = isPangram("The quick brown fox jumps over the lazy dog.");
let out = isPangram("abcdefghijklmopqrstuvwxyz");

console.log(out);