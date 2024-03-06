import React, { useState } from "react";
import styles from "./Form.module.css";
export default function Form({ toDos, setToDos }) {
  const [toDo, setToDo] = useState("");

  function postTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setToDos([...toDos, toDo]);
    setToDo("");
    console.log(toDos);
  }

  return (
    <form className={styles.todoForm} onSubmit={(e) => postTodo(e)}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="Enter To Do Item"
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
