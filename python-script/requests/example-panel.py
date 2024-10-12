from dotenv import load_dotenv
import requests
import os
import json

load_dotenv()

data_set = {"key": os.getenv("API_KEY_PANEL"), "action": "services"}

r = requests.post(url=str(os.getenv("URL_PANEL")), data=data_set)

r_json = r.json()

with open("data.json", "w") as file:
    json.dump(r_json, file, indent=2)
    print("Datos guardados correctamente")
