import { Coord, CoordStatus } from './interfaces';
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
  constructor(private game: Game, private availableCoords: number[] = []) {
    let x = 1;

    while (x <= 1000) {
      this.availableCoords.push(x);
      x++;
    }

    this.playedCoords = {
      status: [
        {
          playedCoords: [{ x: 0, y: 0 }],
        },
        {
          playedCoords: [{ x: 0, y: 0 }],
        },
      ],
    };

    this.stepsPlayed = 0;
  }

  private playedCoords: CoordStatus;
  private stepsPlayed: number;

  public getPlayedCoords(): CoordStatus {
    return this.playedCoords;
  }

  public updatePlayedCoords(coord: Coord, team: Team): void {
    this.playedCoords.status[team].playedCoords.push(coord);
    return;
  }

  public getAvailableCoords(): number[] {
    return this.availableCoords;
  }

  public getStepsPlayed(): number {
    return this.stepsPlayed;
  }

  public incrementStepsPlayed(): void {
    this.stepsPlayed++;
    return;
  }

  // TODO add also checking of the other teams status..
  public checkWinCondition(): boolean {
    if (this.playedCoords.status[0].playedCoords.length >= 3) {
      this.game.gameWon = true;
      return this.game.gameWon;
    } else {
      return this.game.gameWon;
    }
  }

  public clearBoard(): void {
    this.playedCoords.status[0].playedCoords = [];
    this.playedCoords.status[1].playedCoords = [];
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
      !this.board.getAvailableCoords().find(el => el === intX) ||
      !this.board.getAvailableCoords().find(el => el === intY)
    ) {
      return console.log(`Incorrect coord(s) entered: [${[x, y]}]`);
    }

    // If the X and Y coordinates have not been played yet, play them
    if (
      !this.board
        .getPlayedCoords()
        .status[0].playedCoords.find(el => el.x === intX && el.y === intY) &&
      !this.board
        .getPlayedCoords()
        .status[1].playedCoords.find(el => el.x === intX && el.y === intY)
    ) {
      this.board.updatePlayedCoords({ x: intX, y: intY }, this.team);
      console.log(`${this.name} plays ${[intX, intY]}`);
    } else {
      return console.log(
        `${this.name}: This coordinate has already been played ${[intX, intY]}`
      );
    }
    // After the player successfully makes their next move, check if the conditions for winning have been met
    this.board.checkWinCondition();
    this.board.incrementStepsPlayed();
  }
}
