# game-of-life

A game of simulating life based on its surrounding environment.

Use JavaScript prototypal inheritance pattern to create component modules for reusability and maintainability.

### View this live on [link](https://puny-rate.surge.sh)

![demo](https://github.com/yuchiu/game-of-life/blob/master/demo.gif) 

### Game Rules:

- Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.

- Any live cell with two or three live neighbours lives on to the next generation.

- Any live cell with more than three live neighbours dies, as if by overpopulation.

- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

### User Story: 

- When I first arrive at the game, it will randomly generate a board and start playing.

- I can start and stop the board.

- I can set up the board.

- I can clear the board.

- When I press start, the game will play out.
