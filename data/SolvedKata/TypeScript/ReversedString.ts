export function solution(str: string): string {
  let arr: string[];
  arr = str.split("");
  arr.reverse();
  return arr.join(""); // reverse this!
}

// export function solution(str: string): string {
//   return str.split("").reverse().join(""); // reverse this!
// }

let out: string = solution("world");
console.log(out);
