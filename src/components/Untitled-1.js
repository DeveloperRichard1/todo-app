import { useState } from "react";
import Todoitem from "./Todoitem";

export default function Todo() {
  // todo items input
  const [todo, setTodo] = useState("");
  // save todo's to list
  const [todos, setTodos] = useState([]);
  // stop default relaod behaviour on submit of form
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  //react components starts here
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          type="text"
          onChange={(e) => setTodo(e.target.value)}
        />
        {/* submit todo */}
        <button type="submit">Add</button>
      </form>

      {/* display todo items  */}
      {todos.map((item) => (
        <Todoitem item={item} />
      ))}
    </div>
  );
}
