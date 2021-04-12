// export function solution(str: string, ending: string): boolean {
//   if (ending.length === 0) {
//     return true;
//   }
//   let isTrue = true;
//   let arrEnding = ending.split("");
//   let arrStr = str.split("");
//   let coun = 0;
//   for (let i = arrEnding.length - 1; i >= 0; i--) {
//     if (
//       arrEnding[arrEnding.length - 1 - coun] !==
//       arrStr[arrStr.length - 1 - coun]
//     ) {
//       console.log(arrEnding[arrEnding.length - 1 - coun]);
//       console.log(arrStr[arrStr.length - 1 - coun]);
//       isTrue = false;
//     }
//     coun++;
//   }
//   console.log(ending.length);

//   if (
//     str.split("").reverse().shift() === ending.split("").reverse().shift() &&
//     isTrue == true
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

function solution(str: string, ending: string): boolean {
  return str.endsWith(ending);
}

// function solution(str: string, ending: string) {
//   if (str.endsWith(ending)) {
//     return true;
//   } else {
//     return false;
//   }
// }

let out = solution("sumo", "sumo");
console.log(out);

// function solution(str, ending) {
//   return str.endsWith(ending);
// }

// const solution2 = (string, ending) => string.endsWith(ending);

// const map1 = str
// .split("")
// .map((x) =>
//   ending.split("").map((y) => (x === y ? console.log(34) : console.log(12)))
// );

// str.split("").indexOf(ending.split().map((x) => x));
// str.split("").forEach((element) => {
//   ending.split("").forEach((element2) => {
//     if (element !== element2) {
//       console.log(element);
//       console.log(element2);
//       isTrue = false;
//       return isTrue;
//     }
//   });
// });
// for (let i = arrEnding.length - 1; i >= 0; ) {
//   for (let j = arrStr.length - 1; j >= 0; ) {
//     if (arrEnding[i] !== arrStr[j]) {
//       console.log(arrEnding[i]);
//       console.log(arrStr[j]);
//       isTrue = false;

//       j--;
//     }
//     i--;
//   }
// }
