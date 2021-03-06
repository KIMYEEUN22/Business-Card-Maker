import { memo } from "react";
import styles from "./header.module.css";

const Header = memo(({ onLogout }) => {
  return (
    <header className={styles.header}>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img src="../../images/logo.png" alt="logo" className={styles.logo} />
      <h3 className={styles.title}>Business Card Maker</h3>
    </header>
  );
});

export default Header;
