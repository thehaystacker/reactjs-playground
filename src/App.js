import React, { Component } from "react";
import "./App.css";
import User from "./components/user/user";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUpdated: false
    };

    console.log("[App CREATE > constructor]");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App > getDerivedStateFromProps]");

    return null;
  }

  componentDidMount() {
    console.log("[App CREATE > componentDidMount]");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App UPDATE > shouldComponentUpdate]");

    return this.state.isUpdated !== nextState.isUpdated;
  }

  // getSnapshotBeforeUpdate() {
  //   console.log("[App UPDATE > getSnapshotBeforeUpdate]");
  // }

  componentDidUpdate() {
    console.log("[App UPDATE > componentDidUpdate]");
  }

  cbChangeState = () => {
    this.setState(prevState => {
      return {
        isUpdated: true
      };
    });
  };

  render() {
    console.log("[App > render]");

    return (
      <div className="App">
        <h1>App</h1>
        <button type="button" onClick={this.cbChangeState}>
          Change State
        </button>
        <hr />

        <User isUpdated={this.state.isUpdated} />
      </div>
    );
  }
}

export default App;
