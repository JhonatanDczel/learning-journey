export const Post = () => {
  async function data(){
    let fetchData = await fetch("https://jsonplaceholder.typicode.com/posts")
    let jsonData = await fetchData.json()
    console.log(jsonData)
  }
  return (
    <button onClick={data}>Traer datos</button>
  )
}
