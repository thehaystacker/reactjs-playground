import React, { Component } from "react";
import "./App.css";
import User from "./components/user/user";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUpdated: false,
      users: [
        {
          name: "user 1",
          age: 24
        },
        {
          name: "user 2",
          age: '24'
        },
        {
          name: "user 3",
          age: 23
        }
      ]
    };

    console.log("[App CREATE > constructor]");
  }

  render() {
    let users = null;
    if (this.state.users && this.state.users.length) {
      users = this.state.users.map((user, index) => {
        return (
          <User
            key={index}
            isUpdated={this.state.isUpdated}
            data={user}
          />
        );
      });
    }

    return <div className="App">{users}</div>;
  }
}

export default App;
