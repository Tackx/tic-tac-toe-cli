export interface Coord {
  x: number;
  y: number;
}

export interface CoordStatus {
  status: [
    {
      playedCoords: Array<Coord>;
    },
    {
      playedCoords: Array<Coord>;
    }
  ];
}
