import React, { Component } from "react";
import PropTypes from "prop-types";

class Text extends Component {
  static propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string
  };

  render() {
    return (
      <div className="frm-group">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          type="text"
          placeholder={this.props.placeholder}
          className={this.props.className}
          value={this.props.value}
          onChange={event => this.props.onChangeCB(event, "TEXTBOX")}
        />
      </div>
    );
  }
}

export default Text;
