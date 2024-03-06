import styles from "./TodoItem.module.css";
export default function TodoItem({ item }: { item: string }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}
        <span>
          <button className={styles.deleteButton}>X</button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
