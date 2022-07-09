import { Game, Board, Player } from './classes';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const prompt = require('prompt-sync')();

const game = new Game();
const board = new Board(game);

const player1Name = prompt("Enter Player1's name: ");
const player2Name = prompt("Enter Player2's name: ");

// Red team
const player1 = new Player(player1Name, 0, board);
// Blue team
const player2 = new Player(player2Name, 1, board);

game.start();

// console.log(`Red team: ${player1.name}`);
// console.log(`Blue team: ${player2.name}`);

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

  console.log(`${player1.name}'s played coords: `);
  console.log(board.getPlayedCoords().status[0]);
  console.log(`${player2.name}'s played coords: `);
  console.log(board.getPlayedCoords().status[1]);
}

let winningPlayer;

if (player1.winner) {
  winningPlayer = player1.name;
} else if (player2.winner) {
  winningPlayer = player2.name;
}

console.log(`Winning player: ${winningPlayer}`);
console.log(
  `Won in ${board.getStepsPlayed()} total game steps with a ${
    game.winningCombination
  } line!`
);

game.end();
