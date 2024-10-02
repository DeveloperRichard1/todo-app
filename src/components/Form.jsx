import { useState } from "react";
import styles from "./form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Form({ todos, setTodos }) {
  // todo items input
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });
  // stop default relaod behaviour on submit of form
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
    // setTimeout(() => {
    //   alert("Todo added successfully");
    // }, 3);
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div style={{ display: "flex" }}>
        <input
          className={styles.modernInput}
          placeholder="Add a task..."
          value={todo.name}
          type="text"
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
        />
        {/* submit todo */}
        <button className={styles.modernButton} type="submit">
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </form>
  );
}
