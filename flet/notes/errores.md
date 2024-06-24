## Ejecutar en linux

**Error:** No pude ejecutar la app counter en linux porque no tenia la biblioteca mpv, pero en realidad si la tenía pero en una versión mas actualizada de la que flet buscaba (Flet: `libmpv.so.1`, yo: `libmpv.so.2`)
**Solucion:** Hice un enlace simbolico para que el archivo que flet buscaba, direccione al que yo tenía: 
```
sudo find /usr -name "libmpv.so*"

/usr/lib/libmpv.so
/usr/lib/libmpv.so.2.3.0
/usr/lib/libmpv.so.2
```

Y para el enlace simbolico: 

```
sudo ln -s /usr/lib/libmpv.so.2 /usr/lib/libmpv.so.1
ls -l /usr/lib/libmpv.so.1

lrwxrwxrwx 1 root root 20 jun 24 13:32 /usr/lib/libmpv.so.1 -> /usr/lib/libmpv.so.2
```