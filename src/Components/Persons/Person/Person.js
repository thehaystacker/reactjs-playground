import React, {Component} from 'react';

class Person extends Component {
  constructor(props) {
    super(props);

    // console.log(" [Person.js] constructor ");
  }

  // UNSAFE_componentWillMount() {
  //   console.log("[Person.js] componentWillMount");
  // }

  // componentDidMount() {
  //   console.log("[Person.js] componentDidMount");

  // }
  
  render() {
    // console.log("[Person.js] render");

    return (
      <div className="PersonCard">
        <h4>{this.props.name}</h4>
      </div>
    )
  }
}

export default Person;