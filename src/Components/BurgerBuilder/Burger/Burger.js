import React from "react";

import Ingredient from "./Ingredient.js";

import "./Burger.css";

const burger = props => {
  let ingredients = null;
  if (props.ingredients) {
    console.log(" [props.ingredients] ", props.ingredients);

    ingredients = Object.keys(props.ingredients).map((name, idx) =>
      [...Array(props.ingredients[name])].map((_, i) => (
        <Ingredient type={name} key={name + i} />
      ))
    );

    console.log(" [ingredients] ", ingredients);
  }

  return (
    <div className="Burger">
      <Ingredient type="TOPBREAD" />
      {ingredients}
      <Ingredient type="BOTTOMBREAD" />
    </div>
  );
};

export default burger;
