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
          age: 24
        },
        {
          name: "user 3",
          age: 23
        }
      ]
    };
  }

  cbChangeUsername = (event, index) => {
    let name = event.target.value;
    
    this.setState((prevState, props) => {
      let users = [...prevState.users];
      users[index].name = name;
      
      return {
        users: users
      };
    });

    console.log(this.state.users);
  };

  render() {
    let users = null;
    if (this.state.users && this.state.users.length) {
      users = this.state.users.map((user, idx) => {
        return (
          <User
            key={idx}
            idx={idx}
            isUpdated={this.state.isUpdated}
            cbChangeUsername={this.cbChangeUsername}
            data={user}
          />
        );
      });
    }

    return <div className="App">{users}</div>;
  }
}

export default App;
