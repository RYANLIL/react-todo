import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList({ toDos }: { toDos: string[] }) {
  return (
    <div className={styles.list}>
      {toDos.map((i) => (
        <TodoItem key={i} item={i} />
      ))}
    </div>
  );
}
