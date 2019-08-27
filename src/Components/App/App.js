import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header.js";
import Persons from "../Persons/Persons.js";

export const AuthContext = React.createContext(false);

class App extends Component {
  constructor(props) {
    super(props);

    // console.log(" [App.js] constructor ");
  }

  state = {
    persons: [{ name: "Sangeeth", age: 24 }, { name: "Sarath", age: 20 }],
    showPersons: false,
    togglePersonsCount: 0,
    isAuthenticated: false
  };

  // UNSAFE_componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }

  // componentDidMount() {
  //   console.log("[App.js] componentDidMount");
  // }

  fnTogglePersons = () => {
    let showPersons = !this.state.showPersons;

    // this.setState({
    //   showPersons,
    //   togglePersonsCount: this.state.togglePersonsCount + 1
    // });

    this.setState((prevState, props) => {
      return {
        showPersons,
        togglePersonsCount: prevState.togglePersonsCount + 1
      };
    });

    console.log(
      "[fnTogglePersons > togglePersonsCount]",
      this.state.togglePersonsCount
    );
  };

  fnDeletePerson = idx => {
    console.log("[idx]", idx);

    let persons = [...this.state.persons];
    persons.splice(idx, 1);

    this.setState({ persons });
  };

  fnLoginBtn = () => {
    this.setState({ isAuthenticated: true });
  };

  render() {
    // console.log("[App.js] render");

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <AuthContext.Provider value={this.state.isAuthenticated}>
          <Persons
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            eventDeletePersons={this.fnDeletePerson}
          />
        </AuthContext.Provider>
      );
    }

    return (
      <div className="App" id="App">
        <AuthContext.Provider value={this.state.isAuthenticated}>
          <Header
            eventTogglePersons={this.fnTogglePersons}
            eventLoginBtn={this.fnLoginBtn}
          />
        </AuthContext.Provider>

        {persons}
      </div>
    );
  }
}

export default App;
