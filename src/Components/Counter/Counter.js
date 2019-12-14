import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <p className="txt-counter">{this.props.counter}</p>
        <div className="action-btns">
          <button
            className="btn-actions"
            onClick={this.props.cbIncrementCounter}
          >
            Increment
          </button>

          <button
            className="btn-actions"
            onClick={this.props.cbAddCounter}
          >
            Add {this.props.btnAddCount}
          </button>

          <button
            className="btn-actions"
            onClick={this.props.cbDecrementCounter}
          >
            Decrement
          </button>

          <button
            className="btn-actions"
            onClick={this.props.cbSubtractCounter}
          >
            Subtract {this.props.btnSubtractCount}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    btnAddCount: state.btnAddCount,
    btnSubtractCount: state.btnSubtractCount,
  };
};

const mapDispatchToAction = dispatch => {
  return {
    cbIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    cbAddCounter: () => dispatch({ type: "ADD" }),
    cbDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    cbSubtractCounter: () => dispatch({ type: "SUBTRACT" })
  };
};

export default connect(mapStateToProps, mapDispatchToAction)(Counter);
