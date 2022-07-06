import { Game, Board, Player } from './classes';

const game = new Game();
const board = new Board();
const player1 = new Player('Player1', 0, board);
const player2 = new Player('Player2', 1, board);

game.start();

player1.play(1, 2);

// console.log(game);
// console.log(board);
// console.log(player1);
// console.log(player2);

console.log(board.getPlayedCoords());

player1.play(1, 2);

console.log(board.getPlayedCoords());

player1.play(2, 1);

console.log(board.getPlayedCoords());

player2.play(2, 1);

console.log(board.getPlayedCoords());

player2.play(3, 1);

console.log(board.getPlayedCoords());

player1.play(3, 1);
