import React, { Component } from "react";
export default class DelayedBytton extends Component {
  constructor(props) {
    super();
  }
  handleClick= e=> {
    e.persist();
    window.setTimeout(() => {
      this.props.onDelayedClick(e)
    }, this.props.delay);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>delay</button>
      </div>
    );
  }
}
