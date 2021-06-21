import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./app.module.css";
import Login from "./component/login/login";

function App() {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
}
export default App;
