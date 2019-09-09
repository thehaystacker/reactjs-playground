import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  state = {
    addCount: 10,
    subtractCount: 5
  };

  render() {
    return (
      <div>
        <h4>Count : {this.props.counter} </h4>

        <div>
          <button type="button" onClick={this.props.eventIncrement}>
            Increment
          </button>
          <button type="button" onClick={this.props.eventDecrement}>
            Decrement
          </button>
          <button type="button" onClick={this.props.eventAddNum}>
            Add {this.state.addCount}
          </button>
          <button type="button" onClick={this.props.eventSubtractNum}>
            Minus {this.state.subtractCount}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToAction = dispatch => {
  return {
    eventIncrement: () => dispatch({ type: "INCREMENT" }),
    eventDecrement: () => dispatch({ type: "DECREMENT" }),
    eventAddNum: () => dispatch({ type: "ADD", value: 10 }),
    eventSubtractNum: () => dispatch({ type: "SUBTRACT", value: 5 })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToAction
)(Counter);
