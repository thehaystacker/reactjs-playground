import React, { Component } from "react";
import Counter from "../Components/Counter/Counter";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="app">
        <Counter />
      </div>
    );
  }
}

export default App;
