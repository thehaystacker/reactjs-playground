import React from "react";

const Person = props => {
  return (
    <div className="cmp-person">
      <h1>
        Hi!, my name is {props.name} and I'm a {props.role}
      </h1>

      <input
        type="text"
        onChange={event => props.cbInputOnchange(event, props.idx)}
        value={props.name}
      />

      <button type="button" onClick={() => props.cbDeletePerson(props.idx)}>
        Delete Me
      </button>
    </div>
  );
};

export default Person;
