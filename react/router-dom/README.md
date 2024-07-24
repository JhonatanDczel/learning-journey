# React router dom

Iniciamos un proyecto e instalamos react-router-dom

## Ejemplo más basico

Para hacer un ruteo básico podemos usar la tag `RouterProvider`:

```js
<RouterProvider router={router}/>
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
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
```

Cuando entramos a una ruta no establecida se manda a una template pagina 404, podemos personalizar esta vista 
