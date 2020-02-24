import React, { Component } from "react";
import "./user.css";
import PropTypes from "prop-types";

class User extends Component {

  componentDidMount () {
    if (this.props.idx === 2) {
      this.refInputText.focus();
    }
  }
  
  render() {
    let { name, age } = this.props.data;
    let { idx } = this.props;

    return (
      <div className="cmp-user">
        <p>Name : {name}</p>
        <p>Age : {age}</p>

        <input
          type="text"
          value={name}
          onChange={event => this.props.cbChangeUsername(event, idx)}
          ref={inp => {
            this.refInputText = inp;
          }}
        />
      </div>
    );
  }
}

User.propTypes = {
  isUpdated: PropTypes.bool,
  data: PropTypes.object,
  idx: PropTypes.number
};

export default User;
