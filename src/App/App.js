import React, { Component } from "react";
import "./App.css";

import Counter from "../Components/Counter/Counter.js";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Counter></Counter>
      </div>
    );
  }
}

export default App;
