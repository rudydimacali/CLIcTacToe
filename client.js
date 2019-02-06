const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const checkWin = (board) => {
  board.forEach((row, col) => {
    // Check current row
    if (board[row][0] !== '_' && board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
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
    return false;
  }
};

const togglePiece = (board, currentPlayer) => {
  let x = null;
  let y = null;
  const getInput = () => {
    rl.question('Enter the zero-indexed X coordinate of the position to mark.', (answer) => {
      x = answer;
      rl.close();
    });
    rl.question('Enter the zero-indexed X coordinate of the position to mark.', (answer) => {
      x = answer;
      rl.close();
    });
  };
  while (x === null || y === null) {
    getInput();
  }
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
  const playAgain = 'n';
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
