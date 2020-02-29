import React from "react";
import ContextUsers from './WithContext';

class UserList extends React.Component {
  static contextType = ContextUsers;

  render() {
    console.log("[this.context]", this.context);

    return null;
  }
}

export default UserList;
