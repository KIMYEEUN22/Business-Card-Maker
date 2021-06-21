import React from "react";
import { BrowserRouter } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./component/login/login";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Login authService={authService} />
      </BrowserRouter>
    </div>
  );
}

export default App;
