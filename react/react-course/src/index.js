import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function Saludo() {
  // let name = "Jhonatan";
  let married = true;
  // return <h1>Hello world, I am { name }</h1>
  // Operadores ternarios:
  // return married ? <h1>Casado</h1> : <h1>No casado</h1>;

  const user = {
    fn : "Jhonatan", 
    ln : "Arias"
  }

  return <h1>{JSON.stringify(user)}</h1>
}

root.render(
  <>
    <Saludo>
      <Saludo />
    </Saludo>
  </>
);
