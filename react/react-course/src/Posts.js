import { VscBug } from "react-icons/vsc";
// Esto se puede hacer para usar componentes hechos por otras personas y no tenr que escirbirlo manualmente nosotros, esto es muy gooooood
export const Post = () => {
  async function data() {
    let fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
    let jsonData = await fetchData.json();
    console.log(jsonData);
  }
  return (
    <button onClick={data}>
      <VscBug />
      Traer datos
    </button>
  );
};
