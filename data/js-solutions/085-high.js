// function high(x) {
//   let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
//     'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//   let arr = x.split(" ").map(x => x.toLowerCase()), result = [], temp = 0;
//   console.log(arr);
//   arr.forEach(element => {
//     for (let i = 0; i < element.length; i++) {
//       alphabet.forEach(x => {
//         if (element[i] === x) {
//           temp += alphabet.indexOf(x);
//         }
//       })
//       temp = 0
//     }
//     result.push(temp)
//   });
//   console.log(result);
//   let max = Math.max(...result)
//   let arr2 = x.split(" ")
//   let out = result.map((ele, i) => {
//     if (ele === max) {
//       return arr2[i]
//     }
//   });
//   return out[out.length - 1]
// }

function high(string) {
  words = string.split(" ");
  let wordsObj = {};
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    wordsObj[word] = calcScore(word);
  }
  console.table(wordsObj);
  console.log(Object.keys(wordsObj));
  return Object.keys(wordsObj).sort(function (a, b) {
    return wordsObj[b] - wordsObj[a]
  })[0];
}

function calcScore(word) {
  const alphabet = " abcdefghijklmnopqrstuvwxyz";
  chars = word.split("");
  let score = 0;
  chars.forEach(function (char) {
    score += alphabet.indexOf(char);
  });
  return score;
}



// const { compose, reduce, split } = require('ramda');

// const score = compose(
//   reduce((r, v) => r + v.charCodeAt() - 96, 0),
//   split('')
// );

// const high = compose(
//   reduce((r, v) => score(v) > score(r) ? v : r, ''),
//   split(' ')
// );



function high2(words) {

  const alpha = ' abcdefghijklmnopqrstuvwxyz';
  const score = word => word.split('').reduce((a, b) => a + alpha.indexOf(b), 0);
  console.log(score);
  return words
    .split(' ')
    .map((word, pos) => ({ word: word, pos: pos, score: score(word) }))
    .sort((a, b) => a.score - b.score || b.pos - a.pos)
    .pop()
    .word;

}

console.log('high(\'what time are we climbing up the volcano\')',
  high2('what time are we climbing up the volcano'))