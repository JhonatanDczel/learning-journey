# Flet iniciando

Es mejor correr flet en un entorno virtual creado para evitar el error de dependencias: 

```
pip install flet
```

## Poetry
Es un gestor de proyectos para python, ayuda a la resolucion de conflictos entre dependencias y las administra. 

```
poetry new first-flet-app
```

Te crea una estructura de directorio para el proyecto

Deberiamos instalar poetry en un entorno virtual dedicado exlusivamente para este, eso se hace usando pipx, que es usado para instalar aplicaciones Python CLI globalment, mientras se mantienen aisladas en sus entornos virtuales.