import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function CreateTodo() {
  const [toDos, setToDos] = useState<string[]>([]);

  return (
    <>
      <Form toDos={toDos} setToDos={setToDos} />
      <TodoList toDos={toDos} />
    </>
  );
}
