import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.login}>
        <h3>Login</h3>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
