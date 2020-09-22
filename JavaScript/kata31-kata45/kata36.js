function whoIsWinner(piecesPositionList) {
  let input = [], first;

  piecesPositionList.forEach(element => {
    input.push(new Array(element[0] + " " + element[2]));
  });

  let board =
    [
      ['1', '*', '*', '*', '*', '*', '*'],
      ['*', '*', '*', '*', '*', '*', '*'],
      ['*', '*', '*', '*', '*', '*', '*'],
      ['*', '*', '*', '*', '*', '*', '*'],
      ['*', '*', '*', '*', '*', '*', '*'],
      ['*', '*', '*', '*', '*', '*', '*'],
    ];

  //first element 
  first = String(input[0]).charAt(2);
  console.log(first);

  //length 
  let length = piecesPositionList.length;

  let temp;
  let numberCount = {}
  input.forEach(element => {
    temp = String(element).charAt(0);
    numberCount[temp] = (numberCount[temp] || 0) + 1;
  });

  console.log(numberCount);
  console.log(input);

  let limit = 0;
  let counter = 0;
  for (let j = board.length - 1; j >= 0; j--) {
    for (let k = 0; k < board[0].length; k++) {
      while (limit < length) {

        if (pString(piecesPositionList[limit]).charAt(0) === "A") {

        }
        else if (pString(piecesPositionList[limit]).charAt(0) === "B") {

        }
        else if (pString(piecesPositionList[limit]).charAt(0) === "C") {

        }
        else if (pString(piecesPositionList[limit]).charAt(0) === "D") {

        }
        else if (pString(piecesPositionList[limit]).charAt(0) === "E") {

        }
        else if (pString(piecesPositionList[limit]).charAt(0) === "F") {

        }
        else if (pString(piecesPositionList[limit]).charAt(0) === "G") {

        }

        if (String(piecesPositionList[limit]).charAt(2) === 'R') {
          board[j][k] = counter;
          ++counter;
          console.log(board[j][k]);
        }

        limit++;
      }
    }
  }


  //return "Red", "Yellow" or "Draw"
}


let out = whoIsWinner(["A_Yellow",
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
  "D_Yellow"]);

// console.log(out);     //output must ==> return  "Red"

/*

1 * * * * * * *
2 * * * * * * *
3 * * * * * * *
4 * * Y Y * * *
5 * Y R R * * Y
6 Y R R R R Y Y
  A B C D E F G


*/



