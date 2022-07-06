import { Team } from './types';

export interface AvailableCoord {
  x: number;
}

export interface Coord extends AvailableCoord {
  team: Team;
  y: number;
}
