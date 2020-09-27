// function generateHashtag(str) {
//   console.log(str);
//   // str.charAt(0) = str.charAt(0).toUpperCase();
//   let first = str.charAt(0).toUpperCase();
//   let arrStr = str.split("");
//   if (str.length === 0) {
//     return false
//   }
//   arrStr[0] = first
//   arrStr.unshift('#')
//   for (let i = 0; i < arrStr.length; i++) {
//     if (arrStr[i] === " ") {
//       arrStr.splice(i + 1, 1, arrStr[i + 1].toUpperCase());
//       arrStr.splice(i, 1);
//     }
//   }
//   if (str.length > 140) {
//     return false
//   }
//   else return arrStr.join("")
// }


// function generateHashtag(str) {
//   let wordArray = str.split(' ').filter(char => char !== "");
//   console.log(wordArray);
//   let result = "#";

//   if (wordArray.length === 0) {
//     return false;
//   };

//   result += wordArray.map(word => {
//     let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
//     console.log(word.slice(1));
//     return capitalizedWord;
//   }).join('');

//   if (result.length > 140) {
//     return false;
//   } else {
//     return result;
//   };
// };



function generateHashtag(str) {

  const hashtag = str.split(' ').reduce(function (tag, word) {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, '#');

  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}




console.log(generateHashtag("Do We have A Hashtag"));