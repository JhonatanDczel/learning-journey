import subprocess

while True:
    print("=============================")
    cui = input("Ingresa el cui: ")

    if cui.lower() == "salir":
        break

    url = f"http://extranet.unsa.edu.pe/sisacad/libretas/descarga.php?file=/var/temporal/Libreta_De_Notas_{cui}_.pdf&codal={cui}"
    path = f"libretas/{cui}.pdf"
    preview = "libretas/preview.pdf"

    subprocess.run(["wget", "-O", path, url])
    subprocess.run(["wget", "-O", preview, url])

    print(url)
