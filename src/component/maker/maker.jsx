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
      id: "1",
      name: "yeeun",
      company: "dream",
      theme: "dark",
      title: "DBA",
      email: "kye9702@naver.com",
      message: "You don't wanna waste your time",
      fileName: "yeeun",
      fileURL: null,
    },
    {
      id: "2",
      name: "minsu",
      company: "coding",
      theme: "light",
      title: "web",
      email: "kye9702@naver.com",
      message: "Take you home tonight ooh yeah",
      filename: "yeeun",
      fileURL: "yeeun.png",
    },
    {
      id: "3",
      name: "elie",
      company: "wow",
      theme: "colorful",
      title: "back",
      email: "kye9702@naver.com",
      message: "i love 2pm",
      filename: "yeeun",
      fileURL: null,
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
