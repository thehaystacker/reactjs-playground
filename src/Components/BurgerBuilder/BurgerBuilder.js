import React, { Component } from "react";

import Burger from './Burger/Burger.js';
import Controls from './Controls/Controls.js';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      seeds: 0,
      sausage: 0,
    }
  }
  
  render() {
    return (
      <div className="BurgerWrap">
        <Burger ingredients={this.state.ingredients} />
        <Controls ingredients={this.state.ingredients} />
      </div>
    );
  }
}

export default BurgerBuilder;
