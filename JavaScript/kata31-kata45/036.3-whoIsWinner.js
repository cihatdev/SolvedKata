function whoIsWinner(piecesPositionList) {
  let table = [[], [], [], [], [], [], []];
  for (let element of piecesPositionList) {
    let pos = element.split("_")[0];
    let val = element.split("_")[1] === "Yellow" ? 1 : -1;
    switch (pos) {
      case "A": table[0].push(val); break;
      case "B": table[1].push(val); break;
      case "C": table[2].push(val); break;
      case "D": table[3].push(val); break;
      case "E": table[4].push(val); break;
      case "F": table[5].push(val); break;
      case "G": table[6].push(val); break;
    }
    console.log(table);
    let winner = checkWinner(table);
    if (winner !== 0) {
      return winner === 4 ? "Yellow" : "Red";
    }
  }
  return "Draw";
}


function checkWinner(table) {
  for (let i = 0; i < table.length; i++) {
    let sum = 0;
    //checking vertically
    if (table[i].length >= 4) {
      for (let j = 0; j < table[i].length - 3; j++) {
        sum = 0;
        for (let k = 0; k < 4; k++) {
          sum += table[i][j + k];
        }
        if (Math.abs(sum) === 4) return sum;
      }
    }
    //checking horizontally
    if (table.length - i >= 4) {
      for (let j = 0; j < table[i].length; j++) {
        sum = 0;
        for (let k = 0; k < 4; k++) {
          try {
            sum += table[i + k][j];
          } catch (e) { }
        }
        if (Math.abs(sum) === 4) return sum;
      }
    }
    //checking diagonals
    let sumb = 0;
    for (let j = 0; j < table[i].length; j++) {
      sum = 0;
      sumb = 0;
      for (let k = 0; k < 4; k++) {
        try {
          sum += table[i + k][j - k];
        } catch (e) { }
        try {
          sumb += table[i + k][j + k];
        } catch (e) { }
      }
      if (Math.abs(sum) === 4) return sum;
      if (Math.abs(sumb) === 4) return sumb;
    }
  }
  return 0;
}


let arr = ["A_Yellow",
  "B_Red",
  "B_Yellow",
  "C_Red",
  "G_Yellow",
  "C_Red",
  "C_Yellow",
  "D_Red",
  "G_Yellow",
  "D_Red",
  "G_Yellow",
  "D_Red",
  "F_Yellow",
  "E_Red",
  "D_Yellow"];

let out = whoIsWinner(arr);
console.log(out);