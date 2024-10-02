import Todoitem from "./Todoitem";
import styles from "./todoList.module.css";

export default function Todolist({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodos.map((todoItem) => {
        return (
          <Todoitem
            key={todoItem.name}
            todoItem={todoItem}
            setTodos={setTodos}
            todos={todos}
          />
        );
      })}
    </div>
  );
}
