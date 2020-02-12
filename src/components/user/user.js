import React, { Component } from "react";
import List from './list';
import './user.css';

class User extends Component {
    constructor (props) {
        // console.log('[User.js > constructor]');
        
        super(props);
      }
      
      state = {};
    
      componentWillMount () {
        // console.log('[User.js > componentWillMount]');
        
      }
    
      componentDidMount () {
        // console.log('[User.js > componentDidMount]');
        
      }
  render() {
    // console.log('[User.js > render]');

    return (
      <div className="cmp-user">
        <h1>User</h1>

        <List number="1" />
        <List number="2" />
      </div>
    );
  }
}

export default User;
