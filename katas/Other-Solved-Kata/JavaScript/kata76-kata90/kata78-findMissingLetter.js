function findMissingLetter(array) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'
    , 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    , "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
    "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const first = alphabet.indexOf(array[0]);
  return alphabet.slice(first, first + array.length).find(el => !array.includes(el));
}


// function findMissingLetter(arr) {
//   // let str = "abcdefghijklmnopqrstuvwxyz";
//   let str2arr = arr.join("");
//   for (let i = 0; i < str2arr.length; i++) {
//     if (str2arr.charCodeAt(i + 1) - str2arr.charCodeAt(i) != 1) {
//       return String.fromCharCode(str2arr.charCodeAt(i) + 1);
//     }
//   }
// }


// const findMissingLetter = (array) => {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
//   const start = alphabet.indexOf(array[0]);
//   return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
// };


console.log('findMissingLetter([\'O\', \'Q\', \'R\', \'S\']', findMissingLetter(['O', 'Q', 'R', 'S']))
