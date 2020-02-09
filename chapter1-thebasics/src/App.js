import React, { Component } from "react";
import "./App.css";
import Person from "./components/person";

class App extends Component {
  fnInputOnchange = (event, value) => {
    console.log("[event]", event.target.value);
    console.log("[value]", value);
  };
  render() {
    return (
      <div className="App">
        <h1>Hello world</h1>

        <Person />
        <Person
          cbInputOnchange={(event) => this.fnInputOnchange(event, 'somevalue')}
          defaultValue="sangeeth"
        />
        <Person />
      </div>
    );
  }
}

export default App;
