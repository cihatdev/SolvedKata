export function litres(time: number): number {
  return Math.floor(time / 2);
}

let out: number = litres(11.4);
console.log(out);
