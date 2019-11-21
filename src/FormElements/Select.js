import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Select extends Component {
  static defaultProps = {
    selected: false,
    value: ""
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    className: PropTypes.string
  };

  state = {
    selected: this.props.selected
  };

  render() {
    const { options, value } = this.props;

    let selectOptions = null;
    if (options) {
      selectOptions = options.map((option, idx) => {
        return (
          <option key={idx} value={option.value}>
            {option.name}
          </option>
        );
      });
    }

    return (
      <select defaultValue={value} onChange={this.props.onchangeCB}>
        {selectOptions}
      </select>
    );
  }
}
