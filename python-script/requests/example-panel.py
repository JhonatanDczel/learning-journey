from dotenv import load_dotenv
import requests
import os

load_dotenv()

data_set = {"key": os.getenv("API_KEY_PANEL"), "action": "services"}

r = requests.post(url=str(os.getenv("URL_PANEL")), data=data_set)

print(r.json()[0])
