const starPattern = [[0, 0], [-1, 0], [1, 0], [0, -1], [0, 1]];

function hillCount(mountains) {
  return mountains.reduce((acc, row) => acc + row.reduce((acc, dot) => acc + Number(dot === "^"), 0), 0);
}


function peakHeight(mountains) {
  return Array.from({
    length: mountains.length,
  }).findIndex(() => {
    if (hillCount(mountains) === 0) return true;
    mountains = mountains.map((row, rowIndex) =>
      row.map((_, colIndex) =>
        starPattern.reduce((acc, [x, y]) => (acc && (mountains[rowIndex + y] || [])[colIndex + x]) == "^", true)
          ? "^"
          : " "
      )
    );
    return false;
  });
}

function show(m) {
  for (let y = 0; y < m.length; y++) {
    console.log(m[y].join(''));
  }
  return m;
}



const mountains = [
  "^^^^^^        ".split(''),
  " ^^^^^^^^     ".split(''),
  "  ^^^^^^^     ".split(''),
  "  ^^^^^       ".split(''),
  "  ^^^^^^^^^^^ ".split(''),
  "  ^^^^^^      ".split(''),
  "  ^^^^        ".split('')
]

let out = peakHeight(show(mountains));

console.log(out);