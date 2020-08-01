import React from 'react';
import '../Main.css'


class Box extends React.Component {
  // create the selectBox function
  selectBox = () => {
    this.props.selectBox(this.props.row, this.props.column)
  }
  render() {
    return (
      <div className = {this.props.boxClass} id = {this.props.id} onClick = {this.selectBox}>
      </div>
    )
  }
}

export default Box;
