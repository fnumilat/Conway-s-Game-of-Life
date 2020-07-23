import React from 'react';
import Grid from '../src/components/Grid'
import arrayClone from './components/helperFunctions'
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

  // the seed method:
  // this method is going to make sure that some boxes are 
  // automatically being selected when the pages is loaded
  // or the user select to seed


  render() {
    return (
      <div>
        <h1 className = "main-title">Conway's Game of Life</h1>
        <Grid 
        gridFull={this.state.gridFull} 
        rows={this.rows}
        columns={this.columns}
        selectBox={this.selectBox}
        />
        <h2>Generations: {this.state.generation}</h2>
      </div>
    )
  }
}

export default Main;
