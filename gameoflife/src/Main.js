import React from 'react';
import Grid from '../src/components/Grid'
import arrayClone from './components/helperFunctions'
import Buttons from './components/buttons'
import PatternButtons from './components/patternButtons'
import About from './components/about'
import './Main.css';


class Main extends React.Component {
  constructor() {
    super();
    // create vars for speed, rows and columns
    // the grid is going to be 50/30
    this.speed = 100;
    this.rows = 30;
    this.columns = 50;

    this.state = {
      // state to count the generations
      generation: 0,
      // state for the full grid and create an array as big
      // as the rows var and fill it with a map and create
      // another array as big as the columns var and each
      // element in that array is false
      gridFull: Array(this.rows).fill().map(() => Array(this.columns).fill(false))
    };
  };

  // my methods:

  // the select box method:
  // with this method update that above array to set to true
  // when a box is selected
  selectBox = (row, column) => {
    // create a copy of the array instead of changing the state of the gridFull straight
    let gridCopy = arrayClone(this.state.gridFull);
    // if it's selected turn it true and if it's not selected keep it false
    gridCopy[row][column] = !gridCopy[row][column]
    this.setState({
      gridFull: gridCopy
    })
  };

  // the random method:
  // this method is going to make sure that some boxes are 
  // randomly being selected when the user select it
  random = () => {
    // create a copy of the grid
    let gridCopy = arrayClone(this.state.gridFull);
    // through a for loop go through every cell of the grid
    // and decide wether turn them on or off
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        // randomly choose wether a cell stays off or turns on
        if (Math.floor(Math.random() * 4) === 1) {
          gridCopy[i][j] = true;
        }
      }
    }
    this.setState({
      gridFull: gridCopy
    })
  };


  // the play button method to trigger the play method
  playButton = () => {
    // each time the user clicks on the play button it
    // resets
    clearInterval(this.intervalId)
    this.intervalId = setInterval(this.play, this.speed)
  };

  // the pause button method to pause the play method
  pauseButton = () => {
    clearInterval(this.intervalId)
  };

  // setting the speed to 1000 mili seconds
  slow = () => {
    this.speed = 1000;
    this.playButton();
  };

  // setting the speed to 100 mili seconds
  fast = () => {
    this.speed = 100;
    this.playButton();
  };

  // setting the current state of the grid to false using a new variable
  // and set the generation to zero
  clear = () => {
    var grid = Array(this.rows).fill().map(() => Array(this.columns).fill(false));
    this.setState({
      gridFull: grid,
      generation: 0
    });
  };

  // using switch statement switch the sizes that are
  // created in buttons.js
  gridSize = (size) => {
    switch (size) {
      case "1":
        this.columns = 20;
        this.rows = 10;
        break;
      case "2":
        this.columns = 50;
        this.rows = 30;
        break;
      default:
        this.columns = 70;
        this.rows = 50;
    }
    this.clear()
  }


  // the play method:
  play = () => {
    // have the two copies of the grid
    // check to see what the grid is currently like
    let g = this.state.gridFull;
    // and change the squares on the clone and set the state
    // using the clone
    let g2 = arrayClone(this.state.gridFull);
    // all the rules for the game:
    // go through every element in the grid
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        // count = how many neighbors does the cell have
        let count = 0;
        // go through and if there is a neighbor it increases the count + 1
        // and each cells will have 8 neighbors
        if (i > 0) if (g[i - 1][j]) count++;
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
        if (i > 0 && j < this.columns - 1) if (g[i - 1][j + 1]) count++;
        if (j < this.columns - 1) if (g[i][j + 1]) count++;
        if (j > 0) if (g[i][j - 1]) count++;
        if (i < this.rows - 1) if (g[i + 1][j]) count++;
        if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
        if (i < this.rows - 1 && j < this.columns - 1) if (g[i + 1][j + 1]) count++;
        // and check if they are going to die or live
        // if it's less than 2 or more than 3 it dies.
        if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
        // if it's dead and it has 3 neighbors it becomes alive cell
        if (!g[i][j] && count === 3) g2[i][j] = true;
      };
    };
    this.setState({
      // we add the gridFull and the generation plus 1
      gridFull: g2,
      generation: this.state.generation + 1
    })
  };

  /// preset patterns:
  // blinker pattern
  blinker = () => {
    // create a copy of the grid
    let gridCopy = arrayClone(this.state.gridFull);
    // through for loops go through every row and column of the grid
    // and display these certain cells in the grid
    for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
            if (
                [10, 11, 12].includes(j) &&
                [2, 7, 17, 22].includes(i)
            ) {
                gridCopy[i][j] = true;
            } else {
                gridCopy[i][j] = false;
            }
        }
    }
    this.setState({
        gridFull: gridCopy
    })
};

  // beacon pattern
  beacon = () => {
    // create a copy of the grid
    let gridCopy = arrayClone(this.state.gridFull);
    // through for loops go through every row and column of the grid
    // and display these certain cells in the grid
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if ([10, 11, 34, 35].includes(j) && [10, 11].includes(i)) {
          gridCopy[i][j] = true;
        } else if ([12, 13, 32, 33].includes(j) && [12, 13].includes(i)) {
          gridCopy[i][j] = true;
        } else {
          gridCopy[i][j] = false;
        }
      }
    }
    this.setState({
      gridFull: gridCopy
    })
  };

  // glider pattern
  glider = () => {
    // create a copy of the grid
    let gridCopy = arrayClone(this.state.gridFull);
    // through for loops go through every row and column of the grid
    // and display these certain cells in the grid
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (j === 11 && i === 10) {
          gridCopy[i][j] = true;
        } else if (j === 12 && i === 11) {
          gridCopy[i][j] = true;
        } else if ([10, 11, 12].includes(j) && i === 12) {
          gridCopy[i][j] = true;
        } else {
          gridCopy[i][j] = false;
        }
      }
    }
    this.setState({
      gridFull: gridCopy
    })
  };

  componentDidMount() {
    // this method will randomly select boxes 
    this.random()
    // this will play the game
    this.playButton()
    // this will play the blinker preset'
  };


  render() {
    return (
      <div>
        <h1 className = "main-title">Conway's Game of Life</h1>
        <h2 className = "generations-title">Generations: {this.state.generation}</h2>
        <Grid 
        gridFull={this.state.gridFull} 
        rows={this.rows}
        columns={this.columns}
        selectBox={this.selectBox}
        />
        <Buttons 
        playButton = {this.playButton}
        pauseButton = {this.pauseButton}
        slow = {this.slow}
        fast = {this.fast}
        clear = {this.clear}
        random = { this.random}
        gridSize = {this.gridSize}
        />
        <PatternButtons
        blinker = {this.blinker}
        beacon = {this.beacon}
        glider = {this.glider}
        />
        <About/>
        <p className = "footer">Fnu Milat - fnumilat@gmail.com</p>
      </div>
    )
  }
}

export default Main;
