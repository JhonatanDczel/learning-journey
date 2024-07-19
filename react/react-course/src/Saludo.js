// Importante por convencion que los componentes esten en CamelCase
// No por convencion, por REGLA DE REACT
// Se llama PascalCase, no Camel xd 

export function Saludo() {
  // let name = "Jhonatan";
  let married = true;
  let programmer = true;
  // return <h1>Hello world, I am { name }</h1>
  // Operadores ternarios:
  // return married ? <h1>Casado</h1> : <h1>No casado</h1>;

  const user = {
    fn: "Jhonatan",
    ln: "Arias",
  };

  return (
    <h1>Component <br></br> {JSON.stringify(user) + " Programmer? : " + programmer.toString()}</h1>
  );
}

export function UserCard(){
  return <h1>User card component</h1>
}