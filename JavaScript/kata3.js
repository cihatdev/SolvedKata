// Basit, bir kelime dizisi verildiğinde, en kısa kelimelerin uzunluğunu döndürür.
// Dize hiçbir zaman boş olmayacak ve farklı veri türlerini hesaba katmanız gerekmeyecek.

// function findShort(s) {
//   let words = s.split(" ");
//   let shortest = words.reduce((shortestWord, currentWord) => {
//     return currentWord.length < shortestWord.length ? currentWord : shortestWord;
//   });
//   let number = shortest.length;
//   return number;
// }

// Other solutions1

// function findShort(s){
//   return Math.min.apply(null, s.split(' ').map(w => w.length));
// }


// Other solutions2

function findShort(s) {
  return s.split(' ').reduce((min, word) => Math.min(min, word.length), Infinity);
}


let output = findShort("a ab abc abcd abcde abcdef");

console.log(output);