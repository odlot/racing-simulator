import { describe, expect, test } from 'vitest'
import { VehicleParameters, Position, VehicleState, VehicleInputs } from './vehicle'
import { update } from './kinematic'

describe("Kinematic Bicycle Model", () => {
  const parameters: VehicleParameters = {
    L: 2
  }
  const dt = 0.01; // timestep in seconds, i.e., 10 milliseconds

  function simulateOneSecond(state: VehicleState, inputs: VehicleInputs): VehicleState {
    var simulatedState = state;
    for (let step = 0; step < 100; ++step) {
      simulatedState = update(simulatedState, parameters, inputs, dt);
    }
    return simulatedState;
  }

  test("Vehicle keeps heading and position with zero velocity and zero inputs", () => {
    const currentState: VehicleState = {
      position: { x: 0, y: 0 },
      theta: 0,
      v: 0
    };
    const inputs: VehicleInputs = {
      a: 0,
      delta: 0
    }
    const nextState = update(currentState, parameters, inputs, dt);
    expect(nextState.position.x).toBe(0);
    expect(nextState.position.y).toBe(0);
    expect(nextState.theta).toBe(0);
    expect(nextState.v).toBe(0);
  })

  test("Vehicle keeps heading and increases longitudinal position with constant velocity and zero inputs", () => {
    const currentState: VehicleState = {
      position: { x: 0, y: 0 },
      theta: 0,
      v: 10
    };
    const inputs: VehicleInputs = {
      a: 0,
      delta: 0
    }
    var nextState = simulateOneSecond(currentState, inputs);
    expect(nextState.position.x).toBeCloseTo(10, 9);
    expect(nextState.position.y).toBe(0);
    expect(nextState.theta).toBe(0);
    expect(nextState.v).toBe(10);
  })

  test("Vehicle keeps heading and increases longitudinal position with acceleration and no steering angle.", () => {
    const currentState: VehicleState = {
      position: { x: 0, y: 0 },
      theta: 0,
      v: 0
    };
    const inputs: VehicleInputs = {
      a: 10,
      delta: 0
    }
    var nextState = simulateOneSecond(currentState, inputs);
    expect(nextState.position.x).toBeCloseTo(5, 0);
    expect(nextState.position.y).toBe(0);
    expect(nextState.theta).toBe(0);
    expect(nextState.v).toBeCloseTo(10, 9);
  })
})