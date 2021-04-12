const peakHeight = (mountain) => {
  let count = 0;

  mountain[0] = replaceAll(mountain[0], '^', 1);
  mountain[mountain.length - 1] = replaceAll(mountain[mountain.length - 1], '^', 1);

  for (let i = 0; i < mountain.length; i++) {
    mountain[i] = replaceAll(mountain[i], ' ', 0);
  }

  while (true) {
    for (let i = 0; i < mountain.length; i++) {

      for (let j = 0; j < mountain[i].length; j++) {

        if (mountain[i - 1] && mountain[i + 1] && mountain[i][j] === '^') {
          if (mountain[i - 1][j] === count || mountain[i + 1][j] === count) {
            mountain[i][j] = count + 1;
          }
        }
      }
    }

    count++;

    if (count === 2) {
      console.log(mountain);
      return -1;
    }
  }

  console.log(mountain);
}

const replaceAll = (arr, oldChar, newChar) => {
  return arr.map((x) => {
    if (x === oldChar) {
      return newChar;
    } else {
      return x;
    }
  });
}

const flatten = (arr) => {
  return arr.reduce((acc, val) => {
    return Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val, []);
  });
}



const mountain = [
  "^^^^^^        ".split(''),
  " ^^^^^^^^     ".split(''),
  "  ^^^^^^^     ".split(''),
  "  ^^^^^       ".split(''),
  "  ^^^^^^^^^^^ ".split(''),
  "  ^^^^^^      ".split(''),
  "  ^^^^        ".split('')
];
console.table(peakHeight(mountain));