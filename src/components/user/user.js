import React, { Component } from "react";
import "./user.css";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    console.log("[User CREATE > constructor]");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[User > getDerivedStateFromProps]");

    return null;
  }

  componentDidMount() {
    console.log("[User CREATE > componentDidMount]");
  }

  componentDidUpdate() {
    console.log("[User UPDATE > componentDidUpdate]");
  }

  render() {
    console.log("[User > render]");

    return (
      <div className="cmp-user">
        <h1>User</h1>

        <p>{this.props.isUpdated ? "Updated" : "Not Updated "}</p>
      </div>
    );
  }
}

export default React.memo(User);
