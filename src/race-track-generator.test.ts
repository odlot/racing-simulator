import { describe, expect, test } from 'vitest'
import { RaceTrackGenerator } from './race-track-generator.ts';
import { RaceTrack } from './race-track.ts';

describe("RaceTrackGenerator", () => {
  const raceTrackGenerator = new RaceTrackGenerator();

  test("generate()", () => {
    let raceTrack = raceTrackGenerator.generate();
  })
});