import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Select extends Component {
  static defaultProps = {
    value: ""
  };

  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string
  };

  render() {
    let selectOptions = null;
    if (this.props.options) {
      selectOptions = this.props.options.map((option, idx) => {
        return (
          <option key={idx} value={option.value}>
            {option.name}
          </option>
        );
      });
    }

    return (
      <select defaultValue={this.props.value} onChange={this.props.onchangeCB}>
        {selectOptions}
      </select>
    );
  }
}
