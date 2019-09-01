import React from "react";

const ingredient = props => {
  let ingredient = null;
  let ingredientClass = "ingredient ";
  switch (props.type) {
    case "TOPBREAD":
      ingredient = <p>Top Bread</p>;
      ingredientClass += 'topbread';
      break;
    case "BOTTOMBREAD":
      ingredient = <p>Bottom Bread</p>;
      ingredientClass += 'bottombread';
      break;
    case "SALAD":
      ingredient = <p>Salad</p>;
      ingredientClass += 'salad';
      break;
    case "BACON":
      ingredient = <p>Bacon</p>;
      ingredientClass += 'bacon';
      break;
    case "SEEDS":
      ingredient = <p>Seeds</p>;
      ingredientClass += 'seeds';
      break;
    case "SAUSAGE":
      ingredient = <p>Sausage</p>;
      ingredientClass += 'sausage';
      break;
    default:
      break;
  }

  return <div className={ingredientClass}>{ingredient}</div>;
};

export default ingredient;
