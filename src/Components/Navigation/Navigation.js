import React from 'react';

import styles from './Navigation.module.css';

const navigation = (props) => {
  return (
    <div className={styles.nav}>
      <ul>
        <li>Home</li>
        <li>Checkout</li>
        <li>Logout</li>
      </ul>
    </div>
  )
}

export default navigation;