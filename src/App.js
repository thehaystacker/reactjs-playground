import React, { Component } from "react";
import "./App.css";
import User from "./components/user/user";

class App extends Component {
  constructor (props) {
    console.log('[App.js > constructor]');
    
    super(props);
  }
  
  state = {
    mounted: false
  };

  componentWillMount () {
    console.log('[App.js > componentWillMount]');
    
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('[shouldComponentUpdate > nextProps]', nextProps);
    console.log('[shouldComponentUpdate > nextState]', nextState);
    
    
    return nextState.mounted !== true;
  }

  componentDidMount () {
    console.log('[App.js > componentDidMount]');
    
    this.setState({mounted: true})
  }
  
  render() {
    console.log('[App.js > render]');
    
    return (
      <div className="App">
        <User />
      </div>
    );
  }
}

export default App;
