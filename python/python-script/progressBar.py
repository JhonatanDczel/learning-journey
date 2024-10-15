import time
import sys


def barra_progreso(progreso, total):
    ancho_barra = 50
    porcentaje = progreso / total
    longitud_llena = int(ancho_barra * porcentaje)
    barra = "█" * longitud_llena + "-" * (ancho_barra - longitud_llena)

    sys.stdout.write(f"\r|{barra}| {int(porcentaje * 100)}%")
    sys.stdout.flush()


total = 100
for i in range(total + 1):
    barra_progreso(i, total)
    time.sleep(0.05)

print("\n¡Proceso completado!")
