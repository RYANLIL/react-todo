import styles from "./TodoItem.module.css";
export default function TodoItem({
  item,
  toDos,
  setToDos,
}: {
  item: string;
  toDos: string[];
  setToDos;
}) {
  function deleteTodo(deletedItem) {
    console.log(`${item} Deleted`);
    /**Loop thorough entire todos list if the current item does
     * not equal the deleted item keep item in list
     */
    const filteredList = toDos.filter((todo) => todo !== deletedItem);
    setToDos(filteredList);
  }
  function markComplete(completeItem) {}

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}
        <span>
          <button
            className={styles.deleteButton}
            onClick={() => deleteTodo(item)}
          >
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
