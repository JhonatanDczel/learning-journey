import "./task.css";

export function TaskCard({ ready }) {
  // ejemplo con estilos en linea
  const taskStyles = { background: "#202020", color: "white", padding: "20px" };
  return (
    <div className="card" style={ready ? {backgroundColor : "green"} : {backgroundColor : "red"}}>
      <h1>Mi primera tarea</h1>
      <p>{ready? "Tarea realizada" : "Tarea pendiente"}
      </p>
    </div>
  );
}
