// export function flattenAndSort(inputArray: number[][]): number[] {
//   let arr: number[] = [];
//   for (let i = 0; i < inputArray.length; i++) {
//     for (let j = 0; j < inputArray[i].length; j++) {
//       arr.push(inputArray[i][j]);
//     }
//   }
//   arr.sort((a, b) => a - b);
//   return arr;
// }

export const flattenAndSort = (a: number[][]): number[] =>
  [].concat(...a).sort((a, b) => a - b);

let out: number[] = flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]);
console.log(out);

// export function flattenAndSort(inputArray: number[][]): number[] {
//   return [].concat(...inputArray).sort((a, b) => a - b);
// }

// export function flattenAndSort(inputArray: number[][]): number[] {
//   return inputArray.flat().sort((a, b) => a - b);
// }
