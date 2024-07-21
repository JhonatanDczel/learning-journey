import { v4 as uuid} from 'uuid'

const todos = [
  { task: "Comer", id: uuid()},
  { task: "Dormri", id: uuid()},
  { task: "Salir a correr", id: uuid()},
  { task: "Estudiar", id: uuid()},
  { task: "Comer  mientras estudias", id: uuid()},
]

function TaskList(){
  return (
    <ul>
      {
        todos.map( todo => {
          return <li key={todo.id}>{todo.task}</li>
        })
      }
    </ul>
  )
}

export default TaskList