// export function iqTest(numbers: string): number {
//   let arr = numbers.split(" ");
//   // console.log(arr);
//   let evenCounter = 0,
//     oddCounter = 0,
//     returnOdd = 0,
//     returnEven = 0;
//   arr.forEach((x) => {
//     Number(x) % 2 === 0 ? evenCounter++ : oddCounter++;
//   });
//   console.log(arr);

//   if (evenCounter > oddCounter) {
//     for (let i = 0; i < arr.length; i++) {
//       ++returnOdd;
//       if (Number(arr[i]) % 2 !== 0) {
//         return returnOdd;
//       }
//     }
//   } else {
//     for (let i = 0; i < arr.length; i++) {
//       ++returnEven;
//       if (Number(arr[i]) % 2 === 0) {
//         return returnEven;
//       }
//     }
//   }
// }

export function iqTest(numbers: string): number {
  let evenness: number[] = numbers.split(" ").map((x) => Number(x) % 2);
  console.log(evenness);

  return evenness.reduce((a, b) => a + b) == 1
    ? evenness.indexOf(1) + 1
    : evenness.indexOf(0) + 1;
}

// export function iqTest(numbers: string): number {
//   const isEven: Array<boolean> = numbers
//     .split(" ")
//     .map((v) => parseInt(v) % 2 === 0);
//   // console.log(isEven);
//   const oddsCount: number = isEven.filter((v) => v === true).length;
//   const evensCount: number = isEven.filter((v) => v === false).length;
//   // console.log(oddsCount < evensCount);
//   return isEven.indexOf(oddsCount < evensCount) + 1;
// }

let out: number = iqTest("32 4 42 8 3 42");
console.log(out);

// const odds: number[] = [];
