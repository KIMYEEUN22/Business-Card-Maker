import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src="../../images/logo.png" alt="logo" className={styles.logo} />
      <h3 className={styles.title}>Business Card Maker</h3>
    </header>
  );
};

export default Header;
