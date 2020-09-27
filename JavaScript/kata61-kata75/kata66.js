function orderWeight(strng) {
  let newArr = strng.split(" ").sort((a, b) => a - b);
  console.log(newArr);
  // newArr.forEach(element => {
  //   element.split("").reduce((a, b) => {
  //     console.log(a + " " + b);
  //   })
  // });
  let arrNumber, array = [];
  // for (const i in newArr) {
  //   arrNumber = newArr[i].split("")
  //   console.log(arrNumber);
  //   let sum = arrNumber.reduce((a, b) => Number(a) + Number(b))
  //   console.log(array.push(sum));
  //   console.log(sum);
  // }
  console.log(array.sort((a, b) => a.weight - b));

}


function orderWeight(strng) {
  return strng
    .split(' ')
    .map(number => {
      const weight = number.split('').reduce((a, b) => Number(a) + Number(b), 0)

      return { num: number, weight }
    })
    .sort(
      (a, b) =>
        a.weight === b.weight ? a.num.localeCompare(b.num) : a.weight - b.weight
    )
    .map(({ num }) => num)
    .join(' ')
}

console.log(orderWeight("56 65 74 100 99 68 86 180 90"));