import React, { useEffect, useState } from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useHistory } from "react-router";
import Preview from "../preview/preview";
import Editor from "../editor/editor";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
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
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
