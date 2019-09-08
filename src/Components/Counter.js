import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  eventIncrement = () => {
    let count = this.state.count;
    this.setState({ count: count + 1 });
  };

  eventDecrement = () => {
    let count = this.state.count;
    this.setState({ count: count - 1 });
  };

  eventAdd2 = () => {
    let count = this.state.count;
    this.setState({ count: count + 2 });
  };

  eventMinus5 = () => {
    let count = this.state.count;
    this.setState({ count: count - 5 });
  };

  render() {
    return (
      <div>
        <h4>Count : {this.state.count} </h4>

        <div>
          <button type="button" onClick={this.eventIncrement}>
            Increment
          </button>
          <button type="button" onClick={this.eventDecrement}>
            Decrement
          </button>
          <button type="button" onClick={this.eventAdd2}>
            Add 2
          </button>
          <button type="button" onClick={this.eventMinus5}>
            Minus 5
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
