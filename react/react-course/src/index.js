import React from 'react'
import ReactDOM from 'react-dom/client'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

function Saludo(){
  let name = "Jhonatan"
  return <h1>Hello world, I am { name }</h1>
}

root.render(<Saludo/>)