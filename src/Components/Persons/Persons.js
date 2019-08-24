import React, { Component } from "react";
import styles from "./Person.module.css";
import Person from "./Person/Person.js";

class Persons extends Component {
  constructor(props) {
    super(props);

    console.log(" [Persons.js] constructor ");
  }

  UNSAFE_componentWillMount() {
    console.log("[Persons.js] componentWillMount");
  }

  componentDidMount() {
    console.log("[Persons.js] componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("[Persons.js] componentWillReceiveProps", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate nextProps", nextProps);
    console.log("[Persons.js] shouldComponentUpdate nextState", nextState);

    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("[Persons.js] componentWillUpdate nextProps", nextProps);
    console.log("[Persons.js] componentWillUpdate nextState", nextState);
  }

  componentDidUpdate() {
    console.log("[Persons.js] componentDidUpdate");
  }

  render() {
    console.log("[Persons.js] render");

    let persons = this.props.persons.map((person, idx) => {
      return (
        <div className={styles.PersonCard} key={idx}>
          <Person name={person.name} />
        </div>
      );
    });

    return <div className="AppPersons">{persons}</div>;
  }
}

export default Persons;
