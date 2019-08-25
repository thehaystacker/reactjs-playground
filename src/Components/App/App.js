import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header.js";
import Persons from "../Persons/Persons.js";

class App extends Component {
  constructor(props) {
    super(props);

    console.log(" [App.js] constructor ");
  }

  state = {
    persons: [{ name: "Sangeeth", age: 24 }, { name: "Sarath", age: 20 }],
    showPersons: false
  };

  UNSAFE_componentWillMount() {
    console.log("[App.js] componentWillMount");
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  fnTogglePersons = () => {
    let showPersons = !this.state.showPersons;

    this.setState({
      showPersons
    });
  };

  fnDeletePerson = idx => {
    console.log('[idx]', idx);

    let persons = [...this.state.persons];
    persons.splice(idx, 1);

    this.setState({persons});
  };

  render() {
    console.log("[App.js] render");

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          eventDeletePersons={this.fnDeletePerson}
        />
      );
    }

    return (
      <div className="App" id="App">
        <Header eventTogglePersons={this.fnTogglePersons} />

        {persons}
      </div>
    );
  }
}

export default App;
