export function iqTest(numbers: string): number {
  let arr = numbers.split(" ");
  console.log(arr);
  let convert: Array<Number>;
  arr.forEach((x) => convert.push(Number(x)));
  console.table(convert);

  Number(arr);
  console.log(arr);

  return 0;
}

let out: number = iqTest("2 4 7 8 10");
console.log(out);
