# racing-simulator

A simple racing simulator.

## Race Track Generator

The race track generator generates arbitrary valid race tracks that can be used for playing with the simulator.
The race track consists of segments.
There are two types of segments: "straight" and "curve".
A valid race track consists of at least 2 "straight" and 4 "curve" segments that are connected.
A segment has a position and a rotation.
Each segment is a 32x32 square.
The default rotation of the "curve" segment is 0.
Each segment has two available connections.
A race track is valid if all segments have both their available connections occupied.
The connector can connect two segments if their positions and rotations align.

## Kinematic Model

A vehicle has a position, a heading and a velocity.

## Lane Controller

?

## UI

The race track is centered. A button to start, stop, and reset the simulation are below the race track. The start button changes to continue button if stop is pressed. The stop button and the reset button are available once the start button has been pressed.
There is a generate race track button.
