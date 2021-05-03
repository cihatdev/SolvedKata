function highAndLow(numbers) {
  let number = numbers.split(" ");
  for (let item of number) {
    item = Number(item)
  }
  console.log(number);
  let big = number[0];
  let small = numbers[0];
  for (let item of number) {
    item = Number(item);
    if (item < small) {
      small = item;
    }
    if (item > big) {
      big = item;
    }
  }
  number = String(number)
  let out = big + " " + small
  return out
}
