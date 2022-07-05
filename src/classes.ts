import { Coord } from './interfaces.js';
import { Status, Team } from './types.js';

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
  constructor(private playedCoords: Coord[] = []) {}

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
  constructor(public name: string) {
    this.winner = false;
    this.team = this.teamGenerator().next();
  }
  public winner: boolean;
  public team: IteratorResult<Team>;

  *teamGenerator(): Generator<Team> {
    let i = 0;
    if (i < 1) {
      yield i;
      i++;
    } else {
      yield i;
      i--;
    }
  }
}
