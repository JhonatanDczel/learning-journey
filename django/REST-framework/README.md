# Aprenderemos como crear una REST API con django

## Setting up

Primero creamos un entorno virtual para aislar nuestro proyecto y sus paquetes, con `virtualenv`.

> **Pro tip vscode**:
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

- Primero creamos el serializador en `app/serializers.py`

### Serializers

Los serializers son los que transforman nuestros datos de django para poder ser servidos por nuestra API

Se crea una clase que sera el serializador

```python
class ProjectSerializer(serializers.ModelSerializer):
  class Meta():
    model = Project
    fields = ('id', 'title', 'description', 'created_at')
    read_only_fields = ['created_at']
```

- Luego creamos el viewSet en `app/api.py`

### Viewset

Es el que se encarga de definir como van a poder ser accedidos los datos

```python
from .models import Project
from rest_framework import viewsets, permissions
from .serializers import ProjectSerializer

class ProjectViewSet(viewsets.ModelViewSet):
  # Que datos servirá la api
  queryset = Project.objects.all()
  # Quinenes van a poder llamar a la api
  permission_classes = [permissions.AllowAny]
  # Cómo obtendremos los datos
  serializer_class = ProjectSerializer
```

### Router

Para poder acceder a la api, debemos crear las url necesarias, django rest framwork hace el trabajo por nosotros con la funcion routers (que devuelve una lista de urls django):

```python
router = routers.DefaultRouter()

router.register('api/projects', ProjectViewSet, 'projects')

# Router crea los urls para get put post y demas
urlpatterns = router.urls
```

Luego registramos los url en el archivo original del proyecto:

```python
urlpatterns = [
    # Opcional: usar el django admin
    path('admin/', admin.site.urls),
    # Importante: importar include from django.urls
    path('', include('projects.urls'))
]
```

Luego de esto nuestra api deberia estar lista para funcionar, solo debemos correr el servidor

### Consumiendo la API

Podemos usar extensiones de vscode especializadas en consumo de APIS (Como Postmaaaan <3).

Importante: quiza haya un error al intentar acceder como: `api/project` y se soluciona poniendo un slash al final xd `api/project/`

## Desplegando en `render.com`
