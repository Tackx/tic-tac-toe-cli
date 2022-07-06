import { Coord } from './interfaces';
import { Status, Team } from './types';

export class Game {
  constructor(public status: Status = 0) {}

  public start(): void {
    this.status = 1;
  }

  public end(): void {
    this.status = 0;
  }
}

export class Board {
  constructor(
    // private playingBoardX: number[] = [],
    // private playingBoardY: number[] = [],
    private playedCoords: Coord[] = []
  ) {
    // Initialize the playing board, load X and Y coords
    // let x = 1;
    // let y = 1;
    // while (x <= 1000 && y <= 1000) {
    //   this.playingBoardX.push(x);
    //   this.playingBoardY.push(y);
    //   x++;
    //   y++;
    // }
  }

  public getPlayedCoords(): Coord[] {
    return this.playedCoords;
  }

  public updatePlayedCoords(coord: Coord): void {
    this.playedCoords.push(coord);
    return;
  }

  public checkWinCondition(): boolean {
    if (this.playedCoords.length === 2) {
      return true;
    } else {
      return false;
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

  play(x: number, y: number): void {
    if (!this.board.getPlayedCoords().find(el => el.x === x && el.y === y)) {
      this.board.updatePlayedCoords({ team: this.team, x, y });
      console.log(`${this.name} plays ${[x, y]}`);
    } else {
      console.log(
        `${this.name}: This coordinate has already been played ${[x, y]}`
      );
    }
  }

  // public team: IteratorResult<Team>;

  // *teamGenerator(): Generator<Team> {
  //   let i = 0;
  //   if (i < 1) {
  //     yield i;
  //     i++;
  //   } else {
  //     yield i;
  //     i--;
  //   }
  // }
}
