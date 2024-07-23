# Aprenderemos como crear una REST API con django

## Setting up

Primero creamos un entorno virtual para aislar nuestro proyecto y sus paquetes, con `virtualenv`.

> **Pro tip vscode:
> usar el selector de interprete de python
> Asi cada terminal estará cargada correctamente

Instalamos con pip: `Django` y `Django REST Framework`

Iniciamos el proyecto con django `django admin startproject name .`

> Deberemos cambiar de version de django (no usar la 4.1), por un pequeño bug de django rest framework

### CRUD APP

Iniciamos una nueva app para crear el crud, y lo registramos en `settings.py`, registramos tambien `rest_framework`

### Creando los modelos

Crearemos un modelo de proyecto para crear las tablas y hacer nuestra API a partir de aqui

Creamos los modelos (clases) de python: 

```python
class Project(models.Model):
  title = models.CharField(max_length=200)
  description = models.TextField()
  tecnology = models.CharField(max_length=200)
  createdAdd = models.DateTimeField(auto_now_add=True)
```

## REST API

Para saber mas, buscar en la documentacion
