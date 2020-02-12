import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div className="cmp-list">
        <h1>User {this.props.number}</h1>
      </div>
    );
  }
}

export default List;
