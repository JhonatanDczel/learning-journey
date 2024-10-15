import requests
import time

i = 1

print("-------------------------------------------------------")
print("|  CUI   |    DNI    |             Nombres            |")

while True:
    print("-------------------------------------------------------")

    cui = f"2023{i:04}"

    url = f"https://ouis.unsa.edu.pe/tramited/ventanilla/find-student/{cui}"

    r = requests.get(url)
    data = r.json()

    print(
        data["remittent"]["id"],
        data["remittent"]["dic"],
        data["remittent"]["name"],
        sep=" | ",
    )

    i = i + 1
