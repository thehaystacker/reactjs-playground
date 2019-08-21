import React from "react";
import styles from './Header.module.css';

const Header = props => {
  return (
    <div className={styles.AppHeader}>
      <button type="button" className="btn-toggle">Toggle Persons</button>
    </div>
  );
};

export default Header;
