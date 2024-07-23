# Formularios en Django

## Formularios HTML
Los formularios html son muy conocidos y mu versatiles, se usando la siguiente etiqueta:

```html
<form> </form>
```

permiten al visitante hacer cosas como ingresar tewxto, seleccionar opciones, manipular objetos o controles, etc. y luego enviar esa informacion al servidor.

Para poder hacer formularios es vital entender las cuestiones de seguridad que rodean a los metodos GET y POST.
No podemos enviar datos sensibles e informacion inmportante cuando usamos el metodo GET.

## Formularios en Django
De una manera similar a como los campos en un modelo se asignan a una base de datos, asi los atributos de la clase Forms se asignan a una etiqueta `input` en html. 

Los campos de un formulario son en si mismo clases, gestionan los datos del formulario y realizan la validacion cuando se envia un formulario.

Un campo de formulario se representa ante el usuario en el navegador como un "Widget"HTML, una pieza de maquinaria de interfaz de usuario. Cada tipo de campo tiene una clase de widget predeterminada adecuada, pero se pueden anilar según sea necesario.

