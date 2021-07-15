import React from "react";
import styles from "./card.module.css";

const DEFAULT_IMG = "./images/default_logo.png";

const Card = ({ card }) => {
  const { name, company, theme, title, email, message, fileURL } = card;
  const url = fileURL || DEFAULT_IMG;
  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img className={styles.profile} src={url} alt="profile" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

function getStyles(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "color":
      return styles.colorful;
    default:
      throw new Error(`unkown theme: ${theme}`);
  }
}

export default Card;
