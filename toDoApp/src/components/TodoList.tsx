import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList({
  toDos,
  setToDos,
}: {
  toDos: string[];
  setToDos: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  return (
    <div className={styles.list}>
      {toDos.map((i) => (
        <TodoItem key={i} item={i} toDos={toDos} setToDos={setToDos} />
      ))}
    </div>
  );
}
