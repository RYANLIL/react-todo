import styles from "./TodoItem.module.css";
export default function TodoItem({
  item,
  toDos,
  setToDos,
}: {
  item: object;
  toDos: [object];
  setToDos;
}) {
  function deleteTodo(deletedItem) {
    console.log(`${deletedItem} Deleted`);
    /**Loop thorough entire todos list if the current item does
     * not equal the deleted item keep item in list
     */
    const filteredList = toDos.filter((todo) => todo.name !== deletedItem.name);
    setToDos(filteredList);
  }
  function toggleStatus(todoName) {
    //    console.log(`clicked ${todoName}`);
    // const filteredList = toDos.map((todo) => {
    //   if (todoName === todo.name) {
    //     console.log(todo);
    //     todo.status = !todo.status;
    //   }
    //   return todo;
    // });

    const filteredList = toDos.map((todo) =>
      todo.name === todoName ? { ...todo, status: !todo.status } : todo
    );
    //console.log(filteredList);
    setToDos(filteredList);
  }
  //Setting strike through for class
  const className = item.status ? styles.statusCompleted : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={(e) => toggleStatus(item.name)}>
          {item.name}
        </span>
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
