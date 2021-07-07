import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import Login from "./component/login/login";
import Maker from "./component/maker/maker";

function App({ authService, FileInput }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route exact path="/maker">
            <Maker authService={authService} FileInput={FileInput} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
