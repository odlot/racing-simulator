import { Segment, Straight } from './segment.ts';

export class Connector {
  constructor() {

  }

  isAdjacent(firstSegment: Segment, secondSegment: Segment): Boolean {
    if (firstSegment.position.x === secondSegment.position.x) {
      if (Math.abs(firstSegment.position.y - secondSegment.position.y) === 1) {
        return true;
      }
    }
    if (firstSegment.position.y === secondSegment.position.y) {
      if (Math.abs(firstSegment.position.x - secondSegment.position.x) === 1) {
        return true;
      }
    }
    return false;
  }

  haveCompatibleRotations(firstSegment: Straight, secondSegment: Straight): Boolean {
    return firstSegment.direction === secondSegment.direction;
  }

  connect(firstSegment: Segment, secondSegment: Segment): Boolean {
    return false;
  }


}

