import { Game, Board, Player } from './classes.js';

const game = new Game();
const board = new Board();
const player1 = new Player('Tack');
const player2 = new Player('Tack2');

game.start();

console.log(game);
console.log(board);
console.log(player1);
console.log(player2);
