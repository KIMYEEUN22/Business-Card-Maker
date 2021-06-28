import React, { useEffect } from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useHistory } from "react-router";
import Preview from "../preview/preview";
import Editor from "../editor/editor";

const Maker = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });
  return (
    <section className={styles.maker}>
      <header className={styles.header}>
        <Header onLogout={onLogout} />
      </header>
      <section className={styles.container}>
        <Editor />
        <Preview />
      </section>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </section>
  );
};

export default Maker;
