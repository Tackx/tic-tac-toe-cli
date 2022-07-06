import { Game, Board, Player } from './classes';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const prompt = require('prompt-sync')();

const game = new Game();
const board = new Board(game);
const player1 = new Player('Player1', 0, board);
const player2 = new Player('Player2', 1, board);

game.start();

while (!game.gameWon && game.status === 1) {
  if (board.getStepsPlayed() % 2 === 0) {
    console.log(`${player1.name}'s turn:`);
    const x = prompt('X:');
    const y = prompt('Y:');
    player1.play(x, y);
  } else {
    console.log(`${player2.name}'s turn:`);
    const x = prompt('X:');
    const y = prompt('Y:');
    player2.play(x, y);
  }

  console.log(board.getPlayedCoords());
}

game.end();
