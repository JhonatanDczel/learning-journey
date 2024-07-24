# React router dom

Iniciamos un proyecto e instalamos react-router-dom

## Ejemplo más basico

Para hacer un ruteo básico podemos usar la tag `RouterProvider`:

```js
<RouterProvider router={router} />
```

Donde router es un dato que devuelve `createBrowserRoute`, este se usa de la siguiente manera:

```js
const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Componente<h1/>
  },
  {
    path: '/url',
    element: <Componente/>
  }
  {}
])
```

Con esta implementación se debería poder crear ruteos básicos

No olvidar usar el import:

```js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
```

Cuando entramos a una ruta no establecida se manda a una template pagina 404, podemos personalizar esta vista

agregamos una nueva propiedad a nuestra ruta `/`, que será `errorElement : <Componente/>`

Para hacer el ruteo es mejor hacerlo con la etiqueta

```jsx
<Link to{'/url'}> <Link/>
```

## Rutas hijas

Para crear rutas hijas debemos usar la prop `children` que tendra la siguiente forma:

```jsx
children: [
  {
    // Esta es una ruta dinamica
    path: "contact/:contactId",
    element: <Component />,
  },
];
```

Luego, en nuestro componente padre podremos usar la equeta `<Outlet/>` para indicar donde queremos que se ponga el componente hijo

## Error basico

Asi se ve la pagina de error basico:

```jsx
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  return (
    <div>
      <h1>Error</h1>
      <p>Error {error.statusText || error.message}</p>
    </div>
  );
}
```