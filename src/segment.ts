export type Position = {
  x: number,
  y: number
};

export enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

export class Segment {
  position: Position;
  direction: Direction;

  constructor(position: Position, direction: Direction, connections: number[]) {
    this.position = position;
    this.direction = direction;
  }
}

// Direction: 
//  - N (from S to N)
//  - E (from W to E) 
//  - S (from N to S)
//  - W (from E to W)
export class Straight extends Segment {
  constructor(position: Position, direction: Direction, connections: number[]) {
    super(position, direction, connections);
  }
};

type Curve = {} & Segment;