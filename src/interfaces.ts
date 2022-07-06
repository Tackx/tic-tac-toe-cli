import { Team } from './types';

export interface Coord {
  team: Team;
  x: number;
  y: number;
}

export interface Board extends Coord {
  board: Coord[];
}
