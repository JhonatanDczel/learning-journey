# Aprendiendo Django

Django es un framework de desarrollo web para Python, aqui abarcaremos las bases para crear proyectos usando Django

## Programas necesarios

- Python 3
- pip
- VS code / neovim

## Virtual Env

Los entornos virtuales de python nos permiten tener multiples proyectos con dependencias distintas sin que estas causen conflictos entre si.

En arch:

```python
# Para instalar virtualenv:
sudo pacman -S python-virtualenv
```

```python
# Para crear un entorno virtual en el directorio actual:
virtualenv venv
```

## Instalando Django

**Con el entorno virtual creado y activado:**

```python
pip install django
```

## Crar un proyecto con Django

Para crear un nuevo proyecto:

```python
django-admin startproject mysite
```

No usar palabras reservadas como python django o test

Esto crea un proyecto con un manage.py dentro de una carpeta, para crearlo en la carpeta actual:

```python
django-admin startproject mysite .
```

Podemos correr el proyecto con:

```python
python manage.py runserver
```

Esto crea un db.sqlite3 nuevo que es la BD por defecto de Django

El servidor arrancara por defecto en el puerto 8000, para arrancarlo en otro puerto:

```python
python manage.py runserver 3000
```

## Estructura de proyecto

El archivo manage.py sirve para correr comandos administrativos.

db.sqlite3 es la base de datos que se usa con Django normalmente para desarrollo, para producción se debería cambiar la base de datos.

### Dentro de /mysite/

El archivo mas importante es settings.py que tendra distintos parametros que cambiaremos para desarrollar nuestras aplicaciones.

El archivo url.py nos ayuda a manejar las direcciones internas del sitio.

Tanto asgi.py y wsgi.py no estan implicados en el desarrollo sino en la ejecución en producción para servir el contenido fuera de Django.

## Aplicaciones en Django

Dentro de un proyecto de Django existen las **Aplicaciones** que son secciones que interactuan entre si para dar funcionalidad completa al proyecto.

Para crear las aplicaciones usamos `startapp`:

```bash
python manage.py startapp blog
```

Para acoplar estas aplicaciones, lo hacemos desde `/mysite`

### Estructura de una app

El archivo principal es `views.py`, ahi se define que es lo que se envia al cliente para que lo vea en pantalla (html).

Hay una carpeta `/migrations` que se llenará cuando usemos la base de datos mediante el ORM

El archivo `admin.py` nos permitirá acceder a un panel de administrador para crear datos, usuarios, roles y actualizar contenido.

El archivo `apps.py` es para configurar la aplicacion, similar al `settings.py`.

`models.py` es para crear clases que se convertirán en tablas de sql mediante el ORM que creará las tablas y las actualizará usando los archivos "migrations".

El archivo `tests.py` es para hacer pruebas de lógica en nuestro sitio.

## Hola mundo en Django

Lo haremos en el archivo `views.py` de `/myapp`

Dentro escribimos la funcion:

```python
def hello(request):
  return HttpResponse("Hello, Django!")
```

Que devolvera el mensaje que se imprimira en pantalla, usando `urls.py`:

```python
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', hello)
]
```

## Include Django

Para que las aplicaciones manejen sus propias url en lugar de ponerlas todas en `urls.py` crearemos este archivo pero de forma local dentro de `/myapp`.

Ahí agregamos nuestras url:

```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.hello)
]
```

Y desde el archivo principal `urls.py` importamos estas url con la función `include`:

```python
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('myapp.urls'))
]
```

## Trabajando con bases de datos

### Data Models

Para hacer las migraciones:

```python
python manage.py makemigrations
python manage.py migrate
```

Los modelos son codigo de python que se transforma en tablas de sql.

Cada modelo representa una tabla, y sus atributos son campos de la tabla

### Django shell

Para ejecutar una shell interactiva en nuestro proyecto con Django:

```python
python manage.py shell
```

Dentro podemos interacgtuar con nuestra base de datos de la siguiente manera:

```python
>> p = Project(name="Aplication movil")
```

Eso crea una instancia que se agregará a la tabla Project usando: `p.save()`

Project (o cualquier modelo) tiene atributos y funciones estáticas para poder trabajar con nuestra base de datos:

```python
Project.objects.all()
# Te muestra todos los datos de la tabla Project
```

Tenemos a nuestra disposicion funciones utiles como `get(id=3)` o `filter(name="something")`

Esto devolverá el dato contenido en la tabla correspondiente

## Params

Los params los usamos para recibir datos del cliente, se especifican en la url que capta el middleware:

```python
    path('hello/<str:username>', views.hello)
```

Posteriormente podemos trabajar con este parámetro desde la view:

```python
def hello(request, username):
  print(username)
  return HttpResponse(f"Hello, {username}!")
```

## Django Admin

Es un recurso muy valioso de Django que se accede mediante `admin/`, para crear un super usuario lo puedes hacer de la siguiente manera:

```python
python manage.py createsuperuser
```

Luego desde `myapp` > `admin.py` exportamos los modelos que queremos usar:

```python
from django.contrib import admin
from .models import Project, Task

# Register your models here.
admin.site.register(Project)
admin.site.register(Task)
```

Para hacer que los nombres de los datos de las tablas se muestren, debemos sobreescribir la funcion `__str__` que python pone por defecto para parsear un objeto a String:

Para Project:

```python
  def __str__(self):
    return self.name
```

Para Task:

```python
  def __str__(self):
    return self.title + " - " + self.project.name
```

## Render

Forma parte del modulo shortcuts, y nos sirve para renderizar un fragmento de html como respuesta:

```python
def index(request):
  return render(request, 'index.html')
```

Esto buscará en la carpeta `templates`.

## Jinja Templates

Se pueden pasar parametros a los templates asi:

```python
def index(request):
  title = "Welcome to Django Project!"
  return render(request, 'index.html', {'title': title})
```

Y en el template se usan de la siguiente manera:

```python
<h1>{{ title }}</h1>
```

### Bucles for

Se pueden hacer bucles for usando los `{% for x in y %}` y `{% endfor %}`

### Condicionales

Los condicionales de hacen de la siguiente manera:

```jinja
    <h1>{% if task.done == False %}(wait){% else %}(check){% endif %}{{task.title}}</h1>
```

Para mejores referencias visitar la documentación de Jinja

### Template inheritance

Para hacer herencia de templates usamos la palabra reservada `extends`:

```python
{% extends 'base.html' %}
```

Y podemos inyectar fragmentos de html con:

```html
{% block content %}
<p>Algun contenido</p>
{% endblock content %}
```

## Formularios

Los formularios se pueden manejar en Django gracias al modulo forms.

Para esto se crean clases que seran nuestros objetos formulario:

```python
from django import forms

class CreateNewTask(forms.Form):
  title = forms.CharField(label="TItulo de tarea",
                         max_length=200,
                         required=True)
  description = forms.CharField(widget=forms.Textarea, label="Descripcion de tarea", required=True)
```

Esto se le pasa como variable a una template, y se usa de la siguiente manera:

```html
{% extends 'base.html' %} {% block content %}

<h1>Create a new task</h1>
<form method="POST">
  {% csrf_token %} {{ form.as_p }}
  <button>save</button>
</form>

{% endblock %}
```

Note que se esta usando la etiqueta `{% csrf_token %}` de Jinja, esto es para asegurarnos de que la información que llegará al servidor está siendo enviada desde un formulario propio de nosotros.

Podemos acceder a los datos de la query string de la siguiente manera:

```python
def create_task(request):
  if(request.method == 'GET'):
    return render(request, 'create_task.html', {'form' : CreateNewTask() })
  Task.objects.create(title=request.POST['title'], description=request.POST['description'], project_id=1)
  return redirect('/tasks')
```

## URL names

En la funcion path de `urls.py` podemos pasar un 3er parametro que hace referencia al nombre del recurso, esto nos sirve para manejar las direcciones url de forma independiente sin que cause conflicto el cambio de alguna:

```python
urlpatterns = [
    path('', views.index, name='index'),
    path('hello/<str:username>', views.hello, name='hello'),
    path('projects/', views.projects, name='projects'),
    path('tasks/', views.tasks, name='tasks'),
    path('about/', views.about, name='about'),
    path('create_task/', views.create_task, name='create_task'),
    path('create_project/', views.create_project, name='create_project'),
]
```

Luego, en los html templates podemos usar el siguiente tag:

```html
<ul>
  <li><a href="{% url 'index' %}">Home</a></li>
  <li><a href="{% url 'tasks' %}">Tasks</a></li>
  <li><a href="{% url 'projects' %}">Projects</a></li>
  <li><a href="{% url 'about' %}">About</a></li>
  <li><a href="{% url 'create_project' %}">Create Project</a></li>
  <li><a href="{% url 'create_task' %}">Create Task</a></li>
</ul>
```

## Static Files

Los archivos estaticos son las imagenes, css y scripts que no necesitan ser procesados por el servidor, estos se cargan dentro de la carpeta `static` que puede ser modificada desde `settings.py`.

Para usarlos se tienen los siguientes tag templates:

```html
{% load static %}
<img src="{% static 'images/profile.jpg' %}" alt="Django logo" width="80" />
```

Es necesario poner la etiqueta de `load static` ya que sin eso las imagenes no se cargan
