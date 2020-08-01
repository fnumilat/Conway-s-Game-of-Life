# Conway's Game of Life

## Deployed link
https://fnu-milat-game-of-life.netlify.app/

## About it:
Using ReactJs I implemented the Conway's Game of Life in this Lambda School's Build Week project. This app is being able to constantly update each cells in the grid using the Conway's rules. (Rules are mentioned below)

## What do the users can do?
The users can use the Random option to randomly fill the cells and watch the generations changing and ending and also
they can use the 3 preset configurations that I have set up.

## What are the 3 preset configurations?
* Blinker
* Beacon
* Glider

## What other features does the app include?
* Generations(Showing the numbers of generations)
* Play(User can play)
* Pause(User can pause)
* Clear(User can clear the grid)
* Fast(Use can make the speed of the game fast)
* Slow(Use can make the speed of the game slow)
* Grid Size(User can change the sizes of the grid to: Small, Original and Extra Large)

# More About the Conway's Game of Life:
It is a 'cellular automaton', and was invented by Cambridge mathematician John Conway. A cellular automaton is a collection of "colored" cells on a grid of specified shape that evolves through a number of discrete time steps according to a set of rules based on the states of neighboring cells. The rules are then applied iteratively for as many time steps as desired. von Neumann was one of the first people to consider such a model, and incorporated a cellular model into his "universal constructor."

## What are the rules in this game?
### For a space that is 'populated':
* Each cell with one or no neighbors dies, as if by solitude.
* Each cell with four or more neighbors dies, as if by overpopulation.
* Each cell with two or three neighbors survives.
### For a space that is 'empty' or 'unpopulated'
* Each cell with three neighbors becomes populated.