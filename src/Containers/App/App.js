import React, { Component } from "react";
import styles from "./App.module.css";
import Navigation from "../../Components/Navigation/Navigation.js";
import BurgerBuilder from "../../Components/BurgerBuilder/BurgerBuilder.js";
import Footer from "../../Components/Footer/Footer.js";

class App extends Component {
  state = {};

  render() {
    return (
      <div className={styles.builderWrap}>
        <Navigation />
        <BurgerBuilder />
        <Footer />
      </div>
    );
  }
}

export default App;
