import React, { Component } from "react";
import "./App.css";
import Header from "./Header.js";
import Persons from "../Persons/Persons.js";

class App extends Component {
  state = {
    persons: [{ name: "Sangeeth", age: 24 }, { name: "Sarath", age: 20 }],
    showPersons: false
  };

  render() {
    return (
      <div className="App">
        <Header />

        <Persons persons={this.state.persons} />
      </div>
    );
  }
}

export default App;
