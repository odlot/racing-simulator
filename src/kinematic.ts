import { VehicleState, VehicleParameters, VehicleInputs } from "./vehicle";

export function update(state: VehicleState, parameters: VehicleParameters, input: VehicleInputs, dt: number): VehicleState {
  // Continuous derivations
  const xdot = state.v * Math.cos(state.theta);
  const ydot = state.v * Math.sin(state.theta);
  const theta_dot = (state.v * Math.tan(input.delta)) / parameters.L;
  const vdot = input.a;

  // Euler step
  let x = state.position.x + xdot * dt;
  let y = state.position.y + ydot * dt;
  let theta = state.theta + theta_dot * dt;
  let v = state.v + vdot * dt;

  return { position: { x, y }, theta, v };
}