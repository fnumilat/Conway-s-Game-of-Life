import React from 'react';
import Box from './Box'
import '../Main.css'


class Grid extends React.Component {
  render() {
      // create a var for width and the the state
      // of the colomns from Main.js and multiply it
      // by 16
      const width = (this.props.columns * 16);
      // create an array var for rows
      var rowsArray = [];

      // loop through both rows and columns and 
      // create a box Id for each box element
      var boxClass = "";
      for (var i = 0; i < this.props.rows; i++) {
        for (var j = 0; j < this.props.columns; j++) {
            let boxId = i + "_" + j;

            // also using boxClass see if each box is
            // going to be on or off. If true, box is On
            // and if falls, box is Off
            boxClass = this.props.gridFull[i][j] ? "box on" : "box off";
            // push the box to the row array
            rowsArray.push(
                <Box 
                boxClass = {boxClass}
                key = {boxId}
                boxId = {boxId}
                row = {i}
                column = {j}
                selectBox = {this.props.selectBox}
                />
            )
      }}

    return (
      <div className="grid" style={{width: width}}>
          {rowsArray};
      </div>
    )
  }
}

export default Grid;
