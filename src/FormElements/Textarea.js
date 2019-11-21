import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Textarea extends Component {
  static defaultProps = {
    value: ""
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    value: PropTypes.string
  };

  state = {
    value: this.props.value
  };

  render() {
    return (
      <textarea
        id={this.props.id}
        name={this.props.name}
        className={this.props.className}
        defaultValue={this.state.value}
        onChange={this.props.onChangeCB}
      />
    );
  }
}
