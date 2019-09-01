import React, { Component } from "react";

import Burger from './Burger/Burger.js';
import Controls from './Controls/Controls.js';

import styles from './BurgerBuilder.module.css';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      SALAD: 1,
      BACON: 3,
      SEEDS: 0,
      SAUSAGE: 0,
    }
  }
  
  render() {
    return (
      <div className={styles.BurgerWrap}>
        <Burger ingredients={this.state.ingredients} />
        <Controls ingredients={this.state.ingredients} />
      </div>
    );
  }
}

export default BurgerBuilder;
