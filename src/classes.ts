import { Coord, CoordStatus } from './interfaces';
import { Status, Team } from './types';

export class Game {
  constructor(public status: Status = 0) {
    this.gameWon = false;
    this.winningTeam = null;
  }

  gameWon: boolean;
  winningTeam: Team | null;

  public start(): void {
    this.status = 1;
    console.log('The game has been started');
  }

  public end(): void {
    this.status = 0;
    console.log(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      `The game has been finished. Winner = ${Team[this.winningTeam!]} team!`
    );
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
          playedCoords: [],
        },
        {
          playedCoords: [],
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

  // Checks if there are 3 entries in a row in a linear line, TODO linear and horizontal checks
  public checkWinCondition(): boolean {
    // Linear line check
    this.playedCoords.status.map((coordsObj, team) => {
      coordsObj.playedCoords.map(el => {
        for (let j = 0; j < coordsObj.playedCoords.length; j++) {
          if (
            coordsObj.playedCoords[j]?.x === el.x + 1 &&
            coordsObj.playedCoords[j]?.y === el.y + 1
          ) {
            for (let k = 0; k < coordsObj.playedCoords.length; k++) {
              if (
                (coordsObj.playedCoords[k]?.x === el.x + 2 &&
                  coordsObj.playedCoords[k]?.y === el.y + 2) ||
                (coordsObj.playedCoords[k]?.x === el.x - 1 &&
                  coordsObj.playedCoords[k]?.y === el.y - 1)
              ) {
                this.game.gameWon = true;
                this.game.winningTeam = team;
                return;
              }
            }
          } else if (
            coordsObj.playedCoords[j]?.x === el.x - 1 &&
            coordsObj.playedCoords[j]?.y === el.y - 1
          ) {
            for (let k = 0; k < coordsObj.playedCoords.length; k++) {
              if (
                (coordsObj.playedCoords[k]?.x === el.x + 1 &&
                  coordsObj.playedCoords[k]?.y === el.y + 1) ||
                (coordsObj.playedCoords[k]?.x === el.x - 2 &&
                  coordsObj.playedCoords[k]?.y === el.y - 2)
              ) {
                this.game.gameWon = true;
                this.game.winningTeam = team;
                return;
              }
            }
          }
          if (this.game.gameWon) {
            return;
          }
        }
      });
    });

    // Horizontal line check
    this.playedCoords.status.map((coordsObj, team) => {
      coordsObj.playedCoords.map(el => {
        for (let j = 0; j < coordsObj.playedCoords.length; j++) {
          if (
            coordsObj.playedCoords[j]?.x === el.x + 1 &&
            coordsObj.playedCoords[j]?.y === el.y
          ) {
            for (let k = 0; k < coordsObj.playedCoords.length; k++) {
              if (
                (coordsObj.playedCoords[k]?.x === el.x + 2 &&
                  coordsObj.playedCoords[k]?.y === el.y) ||
                (coordsObj.playedCoords[k]?.x === el.x - 1 &&
                  coordsObj.playedCoords[k]?.y === el.y)
              ) {
                this.game.gameWon = true;
                this.game.winningTeam = team;
                return;
              }
            }
          } else if (
            coordsObj.playedCoords[j]?.x === el.x - 1 &&
            coordsObj.playedCoords[j]?.y === el.y
          ) {
            for (let k = 0; k < coordsObj.playedCoords.length; k++) {
              if (
                (coordsObj.playedCoords[k]?.x === el.x + 1 &&
                  coordsObj.playedCoords[k]?.y === el.y) ||
                (coordsObj.playedCoords[k]?.x === el.x - 2 &&
                  coordsObj.playedCoords[k]?.y === el.y)
              ) {
                this.game.gameWon = true;
                this.game.winningTeam = team;
                return;
              }
            }
          }
          if (this.game.gameWon) {
            return;
          }
        }
      });
    });

    // Vertical line check
    this.playedCoords.status.map((coordsObj, team) => {
      coordsObj.playedCoords.map(el => {
        for (let j = 0; j < coordsObj.playedCoords.length; j++) {
          if (
            coordsObj.playedCoords[j]?.x === el.x &&
            coordsObj.playedCoords[j]?.y === el.y + 1
          ) {
            for (let k = 0; k < coordsObj.playedCoords.length; k++) {
              if (
                (coordsObj.playedCoords[k]?.x === el.x &&
                  coordsObj.playedCoords[k]?.y === el.y + 2) ||
                (coordsObj.playedCoords[k]?.x === el.x &&
                  coordsObj.playedCoords[k]?.y === el.y - 1)
              ) {
                this.game.gameWon = true;
                this.game.winningTeam = team;
                return;
              }
            }
          } else if (
            coordsObj.playedCoords[j]?.x === el.x &&
            coordsObj.playedCoords[j]?.y === el.y - 1
          ) {
            for (let k = 0; k < coordsObj.playedCoords.length; k++) {
              if (
                (coordsObj.playedCoords[k]?.x === el.x &&
                  coordsObj.playedCoords[k]?.y === el.y + 1) ||
                (coordsObj.playedCoords[k]?.x === el.x &&
                  coordsObj.playedCoords[k]?.y === el.y - 2)
              ) {
                this.game.gameWon = true;
                this.game.winningTeam = team;
                return;
              }
            }
          }
          if (this.game.gameWon) {
            return;
          }
        }
      });
    });

    return this.game.gameWon;
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
    this.board.incrementStepsPlayed();
    this.board.checkWinCondition();
  }
}
