import { AvailableCoord, Coord } from './interfaces';
import { Status, Team } from './types';

export class Game {
  constructor(public status: Status = 0) {
    this.gameWon = false;
  }

  gameWon: boolean;

  public start(): void {
    this.status = 1;
    console.log('The game has been started');
  }

  public end(): void {
    this.status = 0;
    console.log('The game has been finished');
  }
}

export class Board {
  constructor(
    private game: Game,
    private playedCoords: Coord[] = [],
    private availableCoords: AvailableCoord[] = []
  ) {
    let x = 1;

    while (x <= 1000) {
      this.availableCoords.push({ x });
      x++;
    }
  }

  public getPlayedCoords(): Coord[] {
    return this.playedCoords;
  }

  public updatePlayedCoords(coord: Coord): void {
    this.playedCoords.push(coord);
    return;
  }

  public getAvailableCoords(): AvailableCoord[] {
    return this.availableCoords;
  }

  public checkWinCondition(): boolean {
    if (this.playedCoords.length >= 2) {
      this.game.gameWon = true;
      return this.game.gameWon;
    } else {
      return this.game.gameWon;
    }
  }

  public clearBoard(): void {
    this.playedCoords = [];
    return;
  }
}

export class Player {
  constructor(public name: string, public team: Team, private board: Board) {
    this.winner = false;
  }
  public winner: boolean;

  play(x: string, y: string): void {
    const intX: number = parseInt(x);
    const intY: number = parseInt(y);

    // Check X and Y converted to integers against an array of allowed values, defined on the Board class
    if (
      !this.board.getAvailableCoords().find(el => el.x === intX) ||
      !this.board.getAvailableCoords().find(el => el.x === intY)
    ) {
      return console.log(`Incorrect coord(s) entered: [${[x, y]}]`);
    }

    // If the X and Y coordinates have not been played yet, play them
    if (
      !this.board.getPlayedCoords().find(el => el.x === intX && el.y === intY)
    ) {
      this.board.updatePlayedCoords({ team: this.team, x: intX, y: intY });
      console.log(`${this.name} plays ${[intX, intY]}`);
    } else {
      console.log(
        `${this.name}: This coordinate has already been played ${[intX, intY]}`
      );
    }
    // After the player successfully makes their next move, check if the conditions for winning have been met
    this.board.checkWinCondition();
  }
}
