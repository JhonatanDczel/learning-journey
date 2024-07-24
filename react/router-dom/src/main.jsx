import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error</h1>,
    children: [
      // Expecificar rutas adicionales
      {
        // Para ver cada contacto individualmente
        path: "contacts/:contactid",
        element: <Contact />
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);