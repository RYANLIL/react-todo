import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList({
  toDos,
  setToDos,
}: {
  toDos: [{ todo: string; status: boolean }];
  setToDos: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  return (
    <div className={styles.list}>
      {toDos.map((i) => (
        <TodoItem key={i.name} item={i} toDos={toDos} setToDos={setToDos} />
      ))}
    </div>
  );
}
