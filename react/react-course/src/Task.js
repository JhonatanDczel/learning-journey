import "./task.css";

export function TaskCard({ ready }) {
  // ejemplo con estilos en linea
  const taskStyles = { background: "#202020", color: "white", padding: "20px" };
  const tagStyle = {
    backgroundColor: "#ffff",
    padding: "8px",
    color: "#202020",
    width: "130px",
    textAlign: "center",
    borderRadius: "30px",
    fontWeight: "bold",
    fontFamily: "sans-serif"

  }
  return (
    <div className="card" style={ready ? {backgroundColor : "green"} : {backgroundColor : "red"}}>
      <h1>Mi primera tarea</h1>
      <p style={tagStyle}>{ready? "Tarea realizada" : "Tarea pendiente"}
      </p>
    </div>
  );
}
