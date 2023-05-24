# Pacman!
## [>Play here](https://dylan-hackett.github.io/Pacman/)

This is an implementation of **Pacman** using HTML,CSS, and JavaScript(and some images from the Super MARIO world!) 
## Program Details

The program includes the following functions:

- `displayGrid()`: Renders the game grid on the screen, representing different elements as HTML div elements.

- `coinCheck()`: Checks if Pacman is on a coin or star and updates the score and grid accordingly.

- `lossCheck(ghost_style)`: Checks if Pacman collides with a ghost and triggers the game over condition if necessary.

- `ghosted()`: Handles the movement of the ghosts. I designed a method here that incorporates both randomness and pacman's direction in choosing the next move for the ghost called in the function, as I found it more challenging and it produced greater variety. A random boolean chooses at a set interval whether to chase pac man or move randomly. If the ghost isn't chasing Pacman, it randomly selects a direction, avoiding the last direction, and updates the ghost's position on the screen.

- `setInterval()` calls: These intervals call the game logic. The first interval sets the game to start after a certain delay, allowing pacman a few brief moments of invincibility and then hiding the game's loading message. The second interval checks for collisions between Pacman and ghosts at a faster rate. The third interval updates the positions of the ghosts at less regular intervals, preventing them from moving too quickly.

