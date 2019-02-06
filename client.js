const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const checkWin = (board) => {
  board.forEach((row, col) => {
    // Check current row
    if (row[0] !== '_' && row[0] === row[1] && row[1] === row[2]) {
      return true;
    }
    // Check current column
    if (board[0][col] !== '_' && board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
      return true;
    }
  });
  // Check diagonals
  if ((board[0][0] !== '_' && board[0][0] === board[1][1] && board[1][1] === board[2][2])
    || (board[2][0] !== '_' && board[2][0] === board[1][1] && board[1][1] === board[0][2])) {
    return true;
  }
  return false;
};

const togglePiece = (board, currentPlayer) => {
  let x = null;
  let y = null;
  rl.question('Enter the zero-indexed X coordinate of the position to mark.', (answer) => {
    if (answer >= 0 && answer <= 2) {
      x = answer;
      rl.close();
    } else {
      togglePiece(board, currentPlayer);
    }
  });
  rl.question('Enter the zero-indexed X coordinate of the position to mark.', (answer) => {
    if (answer >= 0 && answer <= 2) {
      y = answer;
      rl.close();
    } else {
      togglePiece(board, currentPlayer);
    }
  });
  if (board[x][y] === '_') {
    board[x][y] = currentPlayer;
  } else {
    togglePiece(board, currentPlayer);
  }
};

const playGame = (board) => {
  let currentPlayer = 'X';
  while (!checkWin(board)) {
    togglePiece(board, currentPlayer);
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
  console.log(`${currentPlayer} wins!`);
  let playAgain = 'n';
  rl.question('Would you like to play again? (Y/N)', (answer) => {
    playAgain = answer.toLowerCase();
    rl.close();
  });
  if (playAgain === 'y') {
    playGame([
      ['_', '_', '_'],
      ['_', '_', '_'],
      ['_', '_', '_'],
    ]);
  }
};

playGame([
  ['_', '_', '_'],
  ['_', '_', '_'],
  ['_', '_', '_'],
]);
