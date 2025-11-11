// Bicycle Model

export type VehicleParameters = {
  L: number,  // m, wheel base = the length between the axles
}

export type VehicleInputs = {
  a: number,    // m/s^2, longitudinal acceleration
  delta: number // rad, steering angle at the front wheel
}

export type Position = {
  x: number, // m
  y: number  // m
};

export type VehicleState = {
  // m
  position: Position,
  // rad [-pi, pi], heading angle at the center of the rear axle
  theta: number,
  // m/s, velocity
  v: number
};