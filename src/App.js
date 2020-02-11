import React, { Component } from "react";
import radium from 'radium';
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
    this.setState({ persons });
  };

  cbTogglePersons = () => {
    let showPersons = this.state.showPersons;
    this.setState({ showPersons: !showPersons });
  };

  render() {
    let persons = null;
    if (this.state.persons && this.state.showPersons) {
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

    let btnToggleStyle = {
      backgroundColor: "blue",
      color: "#fff",
      padding: "5px 12px",
      fontWeight: "bold",
      ':hover': {
        backgroundColor: '#5252ff'
      }
    };
    // Dynamic styles to the button
    if (this.state.showPersons) {
      btnToggleStyle.backgroundColor = 'red';
      btnToggleStyle[':hover'] = {
        backgroundColor: '#ff7070'
      }
    }

    let btnToggleClass = 'btn-toggle';
    if (this.state.showPersons) {
      btnToggleClass += ' bg-blue';
    } else {
      btnToggleClass += ' bg-red';
    }

    let elAppStyle = {
      '@media (max-width: 600px)': {
        backgroundColor: 'red'
      }
    }

    return (
      <div className="App" style={elAppStyle}>
        <button
          className={btnToggleClass}
          style={btnToggleStyle}
          onClick={this.cbTogglePersons}
        >
          Toggle Persons
        </button>

        {persons}
      </div>
    );
  }
}

export default radium(App);
