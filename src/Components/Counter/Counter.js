import React, { Component } from "react";
import "./Counter.css";
import { connect } from "react-redux";

import * as Actions from "../../Store/Actions/Actions";

class Counter extends Component {
  render() {
    let resultsUl = null;
    if (this.props.results && this.props.results.length) {
      resultsUl = this.props.results.map((item, i) => {
        return (
          <li key={i} onClick={() => this.props.cbDeleteResult(i)}>
            {item}
          </li>
        );
      });
    }

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

          <button className="btn-actions" onClick={this.props.cbAddCounter}>
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

        <div className="action-btns">
          <button
            className="btn-actions"
            onClick={() => this.props.cbStoreResult(this.props.counter)}
          >
            Store Result
          </button>
        </div>

        <div className="results">
          <ul>{resultsUl}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter.counter,
    btnAddCount: state.counter.btnAddCount,
    btnSubtractCount: state.counter.btnSubtractCount,
    results: state.results.results
  };
};

const mapDispatchToAction = dispatch => {
  return {
    cbIncrementCounter: () => dispatch(Actions.increment()),
    cbAddCounter: () => dispatch(Actions.add()),
    cbDecrementCounter: () => dispatch(Actions.decrement()),
    cbSubtractCounter: () => dispatch(Actions.subtract()),
    cbStoreResult: (counter) => dispatch(Actions.storeResult(counter)),
    cbDeleteResult: idx => dispatch(Actions.deleteResult(idx))
  };
};

export default connect(mapStateToProps, mapDispatchToAction)(Counter);
