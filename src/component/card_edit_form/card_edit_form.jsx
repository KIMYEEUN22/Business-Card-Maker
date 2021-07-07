import React, { useRef } from "react";
import Button from "../button/button";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({ FileInput, card, onUpdate, onDelete }) => {
  const { name, company, theme, title, email, message, fileName, fileURL } =
    card;
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = () => {
    onDelete(card);
  };

  const onFileChange = (file) => {
    onUpdate({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    } else {
      event.preventDefault();
      onUpdate({
        ...card,
        [event.currentTarget.name]: event.currentTarget.value,
      });
    }
  };
  return (
    <form className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      />
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="color">Colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        value={message}
        onChange={onChange}
      />
      <div className={styles.fileinput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button className={styles.button} name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
