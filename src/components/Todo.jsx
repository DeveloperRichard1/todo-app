import Footer from "./Footer";
import Form from "./Form";
import Todolist from "./Todolist";
import { useState } from "react";

export default function Todo() {
  // save todo's to list
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  //react components starts here
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      {/* display todo items  */}
      <Todolist todos={todos} setTodos={setTodos} />
      {/* <Footer completedTodos={completedTodos} totalTodos={totalTodos} /> */}
    </div>
  );
}
