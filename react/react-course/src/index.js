import React from "react";
import ReactDOM from "react-dom/client";
import { Saludo, UserCard } from "./Saludo";
import Product, { Navbar } from "./Product";
import Component from "./Component";
import { TaskCard } from "./Task";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  // Etiqueta especial fragment <></>: etiueta que contiene otras etiquetas sin ser una etiqueta en si misma
  // Proptypes para restringir el tipado
  <>
    <TaskCard ready={true}/>
  </>
);
