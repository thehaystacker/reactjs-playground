import React from "react";

const Person = props => {
  return (
    <div className="cmp-person">
      <h1>Hi!, I'm a person</h1>

      <input
        type="text"
        name=""
        id=""
        onChange={props.cbInputOnchange}
        defaultValue={props.defaultValue}
      />
    </div>
  );
};

export default Person;
