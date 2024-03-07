import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList({
  toDos,
  setToDos,
}: {
  toDos: [{ todo: string; status: boolean }];
  setToDos: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const sortedToDos = toDos
    .slice()
    .sort((prev, curr) => Number(prev.status - curr.status));

  return (
    <div className={styles.list}>
      {sortedToDos.map((i) => (
        <TodoItem key={i.name} item={i} toDos={toDos} setToDos={setToDos} />
      ))}
    </div>
  );
}
