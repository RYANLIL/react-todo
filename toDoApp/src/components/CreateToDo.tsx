import { useState } from "react";
import TodoItem from "./TodoItem";

export default function CreateTodo() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState<string[]>([]);

  function postTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setToDos([...toDos, toDo]);
    setToDo("");
  }

  return (
    <>
      <form onSubmit={(e) => postTodo(e)}>
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
        />
        <button type="submit">Add</button>
      </form>
      {toDos.map((i) => (
        <TodoItem key={i} item={i} />
      ))}
    </>
  );
}
