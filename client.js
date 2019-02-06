const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const checkWin = (board) => {
  // TODO: implement win checking
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
