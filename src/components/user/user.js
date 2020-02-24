import React, { Component } from "react";
import "./user.css";
import PropTypes from 'prop-types';

class User extends Component {
  render() {
    let { name, age } = this.props.data;

    return (
      <div className="cmp-user">
        <p>Name : {name}</p>
        <p>Age : {age}</p>
      </div>
    );
  }
}

User.propTypes = {
  isUpdated: PropTypes.bool,
  data: PropTypes.object
}

export default User;
