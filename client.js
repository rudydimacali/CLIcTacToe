const readline = require('readline-sync');

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
  let x = readline.question('Enter the zero-indexed X coordinate of the position to mark: ');
  console.log('\n');
  let y = readline.question('Enter the zero-indexed Y coordinate of the position to mark: ');
  console.log('\n');
  if (x < 0 || x > 2 || y < 0 || y > 2) {
    togglePiece();
  } else if (board[x][y] === '_') {
    board[x][y] = currentPlayer;
  } else {
    console.log('Please enter a valid position that has not been marked!');
    togglePiece(board, currentPlayer);
  }
};

const playGame = (board) => {
  let currentPlayer = 'X';
  while (!checkWin(board)) {
    togglePiece(board, currentPlayer);
    console.log(`${board[0]}\n${board[1]}\n${board[2]}`);
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
  console.log(`${currentPlayer} wins!`);
  let playAgain = readline.question('Would you like to play again? (Y/N)');
  if (playAgain.toLowerCase() === 'y') {
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
