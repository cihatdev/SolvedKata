// export function tribonacci(
//   [a, b, c]: [number, number, number],
//   n: number
// ): number[] {
//   if (n === 0) {
//     return [];
//   } else if (n === 1) {
//     return [a];
//   } else if (n === 2) {
//     return [a, b];
//   }
//   let arr: number[] = [a, b, c],
//     temp: number;
//   for (let i: number = 3; i < n; i++) {
//     temp = a + b + c;
//     a = b;
//     b = c;
//     c = temp;
//     arr.push(c);
//   }
//   console.table(arr);

//   return arr;
// }

export function tribonacci(s: Array<number>, n: number): number[] {
  for (let i = 0; s.length < n; i++) s.push(s[i] + s[i + 1] + s[i + 2]);
  return s.slice(0, n);
}

let out = tribonacci([1, 1, 1], 10);
console.log(out);
