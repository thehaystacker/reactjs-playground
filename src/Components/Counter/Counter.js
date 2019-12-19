import React, { Component } from "react";
import "./Counter.css";
import { connect } from "react-redux";

import * as counterActions from "../../store/actions/counter";

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <div className="anime-cards-wrap">Counter : {this.props.counter}</div>

        <button type="button" onClick={this.props.cbBtnIncrement}>Increment</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter.counter
  };
};

const mapDispatchToAction = dispatch => {
  return {
    cbBtnIncrement: () => dispatch(counterActions.incrementCounter())
  };
};

export default connect(mapStateToProps, mapDispatchToAction)(Counter);
