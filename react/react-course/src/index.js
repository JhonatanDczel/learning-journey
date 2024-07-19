import React from "react";
import ReactDOM from "react-dom/client";
import {Saludo, UserCard} from "./Saludo"
import Product, {Navbar} from './Product'

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);



root.render(
  // Etiqueta especial fragment <></>: etiueta que contiene otras etiquetas sin ser una etiqueta en si misma
  <>
    <Saludo/>
    <UserCard/>
    <Product/>
  </>
);
