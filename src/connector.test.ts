import { describe, expect, test } from 'vitest'
import { Straight, Direction } from './segment.ts';
import { Connector } from './connector.ts';

describe("isAdjacent", () => {
  const connector = new Connector();

  test.each([
    { x0: 0, y0: 0, x1: 0, y1: 1 },
    { x0: 0, y0: 0, x1: 1, y1: 0 },
  ])('Given two straight segments with adjacent positions ($x0, $y0) and ($x1, $y1), when checking for adjacency, then it should fail.', ({ x0, y0, x1, y1 }) => {
    const firstSegment = new Straight({ x: x0, y: y0 }, 0, []);
    const secondSegment = new Straight({ x: x1, y: y1 }, 0, []);
    expect(connector.isAdjacent(firstSegment, secondSegment)).toBeTruthy();
  });

  test.each([
    { x0: 0, y0: 0, x1: 0, y1: 0 },
    { x0: 0, y0: 1, x1: 0, y1: 1 },
    { x0: 1, y0: 0, x1: 1, y1: 0 },
    { x0: 1, y0: 0, x1: 0, y1: 1 },
    { x0: 0, y0: 1, x1: 1, y1: 0 },
    { x0: 0, y0: 0, x1: 0, y1: 2 },
    { x0: 0, y0: 0, x1: 2, y1: 0 },
  ])('Given two straight segments with non-adjacent positions ($x0, $y0) and ($x1, $y1), when checking for adjacency, then it should fail.', ({ x0, y0, x1, y1 }) => {
    const firstSegment = new Straight({ x: x0, y: y0 }, 0, []);
    const secondSegment = new Straight({ x: x1, y: y1 }, 0, []);
    expect(connector.isAdjacent(firstSegment, secondSegment)).toBeFalsy();
  });
})

describe("haveCompatibleRotations", () => {
  const connector = new Connector();

  test.each([
    { r0: Direction.Up, r1: Direction.Up },
    { r0: Direction.Down, r1: Direction.Down },
    { r0: Direction.Left, r1: Direction.Left },
    { r0: Direction.Right, r1: Direction.Right },
  ])('Given two straight segments with compatible rotations $r0 and $r1, when checking for compatibility, then it should succeed.', ({ r0, r1 }) => {
    const firstSegment = new Straight({ x: 0, y: 0 }, r0, []);
    const secondSegment = new Straight({ x: 0, y: 0 }, r1, []);
    expect(connector.haveCompatibleRotations(firstSegment, secondSegment)).toBeTruthy();
  });

  test.each([
    { r0: Direction.Up, r1: Direction.Down },
    { r0: Direction.Down, r1: Direction.Up },
    { r0: Direction.Left, r1: Direction.Right },
    { r0: Direction.Right, r1: Direction.Left },
  ])('Given two straight segments with non-compatible rotations $r0 and $r1, when checking for compatibility, then it should fail.', ({ r0, r1 }) => {
    const firstSegment = new Straight({ x: 0, y: 0 }, r0, []);
    const secondSegment = new Straight({ x: 0, y: 0 }, r1, []);
    expect(connector.haveCompatibleRotations(firstSegment, secondSegment)).toBeFalsy();
  });
});

test("Given two straight segments with adjacent positions and the same rotation, when trying to connect these segments, then it should succeed.", () => {
  const connector = new Connector();
  const firstSegment = new Straight({ x: 0, y: 0 }, 0, []);
  const secondSegment = new Straight({ x: 0, y: 1 }, 0, []);
  expect(connector.connect(firstSegment, secondSegment)).toBeTruthy();
});