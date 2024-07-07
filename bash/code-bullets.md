# Code Snippets
Here are some code snippets that I have collected over the long time I have been a Unix programmer.

## Searching files
### Find and exec 
```bash
find /ruta/del/directorio -type f -name "*.txt" -exec ls -lh {} \;
```

## Various

### Repair some corrupt files
Strings es un comando que extrae las lineas de codigo legibles de un archivo

```bash
strings corrupt-file > new-file
```

Es bueno hacer una copia del archivo corrupto antes de hacer cualquier cosa, y adicionalmente, volver a cargarlo (Para casos de .zsh_history por ejem): 

```bash
fc -R new-file
```

