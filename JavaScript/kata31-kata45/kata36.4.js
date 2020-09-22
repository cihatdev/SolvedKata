function whoIsWinner(piecesPositionList) {

  function addBalltoBoard(move) {
    var pos, color;
    [pos, color] = move.split('_');
    board[INDEXES[pos]].push(color);
  };

  function checkHorisontally(col, row) {
    var value = board[col][row];
    for (var q = 1; q < 4; ++q) {
      if (board[col + q][row] != value) {
        return false;
      };
    };
    return true;
  };

  function checkVertically(col, row) {
    var value = board[col][row];
    for (var q = 1; q < 4; ++q) {
      if (board[col][row + q] != value) {
        return false;
      };
    };
    return true;
  };

  function checkDiagonallyA(col, row) {
    var value = board[col][row];
    for (var q = 1; q < 4; ++q) {
      if (board[col + q][row + q] != value) {
        return false;
      };
    };
    return true;
  };

  function checkDiagonallyB(col, row) {
    var value = board[col][row];
    for (var q = 1; q < 4; ++q) {
      if (board[col + q][row - q] != value) {
        return false;
      };
    };
    return true;
  };

  function checkPoint(col, row) {
    return checkHorisontally(col, row) ||
      checkVertically(col, row) ||
      checkDiagonallyA(col, row) ||
      checkDiagonallyB(col, row);
  };

  var INDEXES = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6 };

  var board = {};
  for (var q = 0; q < 10; ++q) {
    board[q] = [];
  };

  for (var move of piecesPositionList) {
    addBalltoBoard(move);

    for (col = 0; col < 7; ++col) {
      for (row = 0; row < board[col].length; ++row) {
        if (checkPoint(col, row)) {
          return board[col][row];
        };
      };
    };
  };
  console.log(board);
  return "Draw";
};