import React, { Component } from "react";

export default class CoordinateButton extends Component {
  handleClick = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    let coordinate = [x, y];
    this.props.onReceiveCoordinates(coordinate);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>coor</button>
      </div>
    );
  }
}
