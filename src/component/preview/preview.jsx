import React from "react";
import styles from "./preview.module.css";

const Preview = ({ cards }) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      {cards.map((item) => (
        <section className={styles.card}>
          <img
            className={styles.profile}
            src="./images/default_logo.png"
            alt="profile"
          />
          <div className={styles.content}>
            <h1 className={styles.text}>{item.name}</h1>
            <p className={styles.text}>{item.corporation}</p>
            <div className={styles.divider}></div>
            <p className={styles.text}>{item.job}</p>
            <p className={styles.text}>{item.email}</p>
            <p className={styles.text}>{item.introduction}</p>
          </div>
        </section>
      ))}
    </section>
  );
};

export default Preview;
