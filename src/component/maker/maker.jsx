import React, { useEffect, useState } from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useHistory } from "react-router";
import Preview from "../preview/preview";
import Editor from "../editor/editor";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      name: "yeeun",
      corporation: "dream",
      thim: "black",
      job: "DBA",
      email: "kye9702@naver.com",
      introduction: "You don't wanna waste your time",
    },
    {
      name: "minsu",
      corporation: "coding",
      thim: "white",
      job: "web",
      email: "kye9702@naver.com",
      introduction: "Take you home tonight ooh yeah",
    },
    {
      name: "elie",
      corporation: "wow",
      thim: "color",
      job: "back",
      email: "kye9702@naver.com",
      introduction: "i love 2pm",
    },
  ]);
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
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
