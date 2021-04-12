export class Kata {
  static findLongest(array: number[]): number {
    console.log(array);
    let mostDigit = 0,
      result;
    array
      .join(" ")
      .split(" ")
      .forEach((element) => {
        if (mostDigit < element.length) {
          mostDigit = element.length;
          result = element;
        }
      });
    // console.log(mostDigit);
    return Number(result);
  }
}

let out = Kata.findLongest([1, 10, 10000]);
console.log(out);
