function alphabetPosition(text) {
  // let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  // 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  alphabet = letters.split("")
  console.log(alphabet);
  let arrText = text.split("").map(x => x.toLowerCase());
  arrText.forEach(element => {
    if (element < 'a' || element > 'z') {
      let index = arrText.indexOf(element);
      if (index > -1) {
        arrText.splice(index, 1)
      }
    }
  });
  let res = [];
  arrText.forEach(element => {
    for (const [index, values] of Object.entries(alphabet)) {
      if (element === values) {
        res.push(String((Number(index) + 1)))
      }
    }
  });
  return res.join(" ");
}


function alphabetPosition(text) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';

  return text.toLowerCase()
    .split('')
    .filter(t => letters.indexOf(t) > -1)
    .map(t => letters.indexOf(t) + 1 || '')
    .join(' ');
}

console.log(alphabetPosition("The narwhal bacons at midnight."));


