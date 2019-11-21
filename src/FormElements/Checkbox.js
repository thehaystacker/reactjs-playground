import React, { Component } from "react";
import PropTypes from "prop-types";

class Checkbox extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool
  };

  state = {};
  render() {
    return (
      <div className="inp-chk-wrap">
        <label htmlFor={this.props.id}>
          <input
            type="checkbox"
            name={this.props.name}
            id={this.props.id}
            value={this.props.value}
            defaultChecked={this.props.checked}
          />
          {this.props.title}
        </label>
      </div>
    );
  }
}

export default Checkbox;
