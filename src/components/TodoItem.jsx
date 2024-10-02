import styles from "./todoItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todoitem({ todoItem, todos, setTodos }) {
  function handleDelete(todoItem) {
    console.log("Delete btn clicked for:", todoItem);
    setTodos(todos.filter((todo) => todo !== todoItem));
  }
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const done = todoItem.done ? styles.complete : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={done} onClick={() => handleClick(todoItem.name)}>
          {todoItem.name}
        </span>
        <span>
          <button
            className={styles.delBtn}
            onClick={() => handleDelete(todoItem)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </span>
      </div>
      <hr style={{ border: "1px solid #f4f4f4" }} />
    </div>
  );
}
