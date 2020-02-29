import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Users from "./components/Users";

import ContextUsers from './components/WithContext';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isUpdated: true,
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

    this.refUserComponent = React.createRef();
  }

  cbChangeUsername = () => {
    console.log(this.state.users);
  };

  cbDeleteUser = () => {
    console.log("[cbDeleteUser]");
  };

  render() {
    return (
      <div className="App">
        <Header></Header>
        <ContextUsers.Provider
          value={{
            isUpdated: this.state.isUpdated,
            users: this.state.users,
            cbDeleteUser: this.cbDeleteUser
          }}
        >
          <Users></Users>
        </ContextUsers.Provider>
      </div>
    );
  }
}

export default App;
