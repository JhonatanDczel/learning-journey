import requests
import time

while True:
    print("=============================")
    cui = input("Ingresa el cui: ")

    if cui.lower() == "salir":
        break

    url = "https://ouis.unsa.edu.pe/tramited/ventanilla/find-student/" + cui

    r = requests.get(url)
    data = r.json()
    time.sleep(1)

    print(data["remittent"]["id"], data["remittent"]["name"], sep=" | ")
