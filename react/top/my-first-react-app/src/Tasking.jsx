import { useState } from "react";
import { v4 as uuid } from "uuid";

const todos = [
  { task: "Comer", id: uuid() },
  { task: "Dormri", id: uuid() },
  { task: "Salir a correr", id: uuid() },
  { task: "Estudiar", id: uuid() },
  { task: "Comer  mientras estudias", id: uuid() },
];

function TaskList() {
  const [first, setfirst] = useState(false)

  setTimeout(() => {
    setfirst(true)
  }, 3000)


  setTimeout(() => {
    setfirst(false)
  }, 5000)

  if(first)
    return <h1>simon</h1>
  else
    return <h1>Nel</h1>

  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.task}</li>;
      })}
    </ul>
  );
}

export default TaskList;
