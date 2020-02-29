import React from "react";
import { ContextUsers } from "../App";

class UserList extends React.Component {
      static contextType = ContextUsers;

  render() {
        let value = this.context;

    console.log("[value]", value);

    return null;
  }
}

export default UserList;
