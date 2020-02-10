import React, { Component } from "react";
import "./App.css";
import Person from "./components/person";

class App extends Component {
  state = {
    persons: [
      { name: "Person 1", role: "Role 1" },
      { name: "Person 2", role: "Role 2" },
      { name: "Person 3", role: "Role 3" }
    ],
    showPersons: true
  };

  cbDeletePerson = idx => {
    console.log(idx);

    let persons = [...this.state.persons];
    persons.splice(idx, 1);

    console.log(persons);
    
    this.setState({ persons: persons });
  };

  cbInputOnchange = (event, idx) => {
    let persons = [...this.state.persons];
    persons[idx].name = event.target.value;
    this.setState({persons});
  };

  render() {
    let persons = null;
    if (this.state.persons) {
      persons = (
        <div className="wrap-persons">
          {this.state.persons.map((person, idx) => {
            return (
              <Person
                name={person.name}
                role={person.role}
                key={idx}
                idx={idx}
                cbInputOnchange={this.cbInputOnchange}
                cbDeletePerson={this.cbDeletePerson}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello world</h1>

        {persons}
      </div>
    );
  }
}

export default App;
