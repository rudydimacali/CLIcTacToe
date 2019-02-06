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
  // TODO: implement board piece toggling
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
