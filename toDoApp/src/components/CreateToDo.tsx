import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function CreateTodo() {
  const [toDos, setToDos] = useState<string[]>([]);
  //Count of completed tasks
  const competedCount = toDos.filter((todo) => todo.status).length;
  const totalTodos = toDos.length;

  return (
    <>
      <Form toDos={toDos} setToDos={setToDos} />
      <TodoList toDos={toDos} setToDos={setToDos} />
      <Footer completedTodos={competedCount} totalTodos={totalTodos} />
    </>
  );
}
