function streetFighterSelection(fighters, position, moves) {
  let result = [];
  let verticalPosY = position[0];
  let horizontalPosX = position[1];
  moves.forEach(mov => {
    switch (mov) {
      case 'up':
        verticalPosY--;
        if (verticalPosY) {
          verticalPosY = 0;
        }
        console.log(verticalPosY);
        break;
      case 'down':
        verticalPosY++;
        verticalPosY = fighters.length - 1;
        break;
      case 'left':
        horizontalPosX--;
        if (horizontalPosX < 0) {
          horizontalPosX = fighters[verticalPosY].length - 1
        }
        break;
      case 'right':
        horizontalPosX++;
        if (horizontalPosX > fighters[verticalPosY].length - 1) {
          horizontalPosX = 0
        }
        break;
    }
    result.push(fighters[verticalPosY][horizontalPosX]);
  });
  return result;
}


let fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];
moves = ["up", "left", "down", "right", "up", "left", "down", "right"];

let out = streetFighterSelection(fighters, [0, 0], moves);
console.log(out);

'Ryu', 'Vega', 'M.Bison', 'Ken', 'Ryu', 'Vega', 'M.Bison', 'Ken'