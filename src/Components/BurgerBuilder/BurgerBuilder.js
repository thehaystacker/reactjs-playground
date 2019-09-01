import React, { Component } from "react";

import Aux from '../../HOC/Aux.js';

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
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <Controls ingredients={this.state.ingredients} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
