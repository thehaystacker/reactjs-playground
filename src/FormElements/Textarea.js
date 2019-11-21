import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Textarea extends Component {
  static defaultProps = {
    value: "",
    rows: "6",
    cols: "6"
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    value: PropTypes.string,
    rows: PropTypes.string,
    cols: PropTypes.string
  };

  state = {
    value: this.props.value
  };

  render() {
    return (
      <div className="frm-group">
        <label htmlFor="">{this.props.label}</label>
        <textarea
          id={this.props.id}
          name={this.props.name}
          className={this.props.className}
          defaultValue={this.state.value}
          rows={this.props.rows}
          cols={this.props.cols}
          onChange={this.props.onChangeCB}
        />
      </div>
    );
  }
}
