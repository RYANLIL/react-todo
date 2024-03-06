import TodoItem from "./TodoItem";

export default function TodoList({ toDos }: { toDos: string[] }) {
  return (
    <div>
      {toDos.map((i) => (
        <TodoItem key={i} item={i} />
      ))}
    </div>
  );
}
