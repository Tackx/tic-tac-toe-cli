export interface Coord {
  x: number;
  y: number;
}

export interface CoordStatus {
  status: [
    {
      playedCoords: Coord[];
    },
    {
      playedCoords: Coord[];
    }
  ];
}
