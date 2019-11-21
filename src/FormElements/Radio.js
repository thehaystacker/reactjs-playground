import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Radio extends Component {
  static defaultProps = {
    checked: false,
    label: '',
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    id: PropTypes.string,
    checked: PropTypes.bool
  };

  state = {
    checked: this.props.checked
  };

  onChangeCB = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <div className="inp-rdo-wrap">
        <label htmlFor={this.props.id}>
          <input
            type="radio"
            name={this.props.name}
            value={this.props.value}
            className={this.props.className}
            id={this.props.id}
            defaultChecked={this.state.checked}
            onChange={this.onChangeCB}
          />
          {this.props.label}
        </label>
      </div>
    );
  }
}
