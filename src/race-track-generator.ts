import { RaceTrack } from './race-track.ts';

export class RaceTrackGenerator {
  constructor() { }

  generate(): RaceTrack {
    return new RaceTrack();
  }
}