import React, { useState } from "react";
import styles from "./Form.module.css";
export default function Form({ toDos, setToDos }) {
  //const [toDo, setToDo] = useState("");
  const [toDo, setToDo] = useState({ name: "", status: false });

  function postTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setToDos([...toDos, toDo]);
    setToDo({ name: "", status: false });
    console.log(toDos);
  }

  return (
    <form className={styles.todoForm} onSubmit={(e) => postTodo(e)}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          value={toDo.name}
          onChange={(e) => setToDo({ name: e.target.value, status: false })}
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
