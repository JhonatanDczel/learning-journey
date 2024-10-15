import time


def barra_progreso(progreso, total):
    ancho_barra = 50
    porcentaje = progreso / total
    longitud_llena = int(ancho_barra * porcentaje)
    barra = "█" * longitud_llena + "-" * (ancho_barra - longitud_llena)

    print(f"\r|{barra}| {int(porcentaje * 100)}%", end="", flush=True)


total = 100
for i in range(total + 1):
    barra_progreso(i, total)
    time.sleep(0.05)

print("\n¡Proceso completado!")
