import React, { Component } from "react";
import "./App.css";

import Counter from "../Components/Counter";

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
