import React from "react";
import styles from './Person.module.css';

const Persons = props => {
  let persons = null;
  if (props.persons && props.persons.length) {
    persons = props.persons.map((person, idx) => {
      return (
        <div className={styles.PersonCard} key={idx}>
          {person.name}
        </div>
      );
    });
  }

  return <div className="app-persons">{persons}</div>;
};

export default Persons;
