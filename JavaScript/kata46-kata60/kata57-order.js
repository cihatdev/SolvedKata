function order(words) {
  let arr = words.split(" "), rest = "", newArr = [, , , , , , , , , , , , , , , , , , , , , , , , ,];
  arr.forEach(element => {
    rest = element.split("").filter((x) => x <= 9 && x >= 1);
    newArr.splice(Number(Number(rest) - 1), 1, element)
  });
  return newArr.filter(n => n).join(" ");
}



console.log(order("4of Fo1r pe6ople g3ood th5e the2"));