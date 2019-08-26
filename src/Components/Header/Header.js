import React from "react";
import styles from "./Header.module.css";
import { AuthContext } from "../App/App";

const Header = props => {
  return (
    <div className={styles.AppHeader}>
      <button
        type="button"
        className="btn-toggle"
        onClick={props.eventTogglePersons}
      >
        Toggle Persons
      </button>

      <AuthContext.Consumer>
        {auth =>
          auth ? (
            <button type="button" className="btn-toggle">
              Logout
            </button>
          ) : (
            <button
              type="button"
              className="btn-toggle"
              onClick={props.eventLoginBtn}
            >
              Login
            </button>
          )
        }
      </AuthContext.Consumer>
    </div>
  );
};

export default Header;
