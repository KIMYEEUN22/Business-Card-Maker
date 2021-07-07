import React, { useRef, useState } from "react";
import Button from "../button/button";
import styles from "./card_add_form.module.css";

const AddForm = ({ FileInput, onAdd }) => {
  const [file, setFile] = useState({ fileName: null, fileURL: null });
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onFileChange = (file) => {
    console.log(file);
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };
    onAdd(card);
    setFile({ fileName: null, fileURL: null });
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="name"
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        placeholder="company"
      />
      <select ref={themeRef} className={styles.select} name="theme">
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="color">Colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        placeholder="title"
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        placeholder="email"
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        placeholder="message"
      />
      <div className={styles.fileinput}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button className={styles.button} name="Add" onClick={onSubmit} />
    </form>
  );
};

export default AddForm;
