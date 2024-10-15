import requests
import os
import dotenv

API_ENDPOINT = "https://pastebin.com/api/api_post.php"

dotenv.load_dotenv()

# Usaremos dotenv para cargar las variables de entorno desde un .env
API_KEY = os.getenv("API_KEY")

source_code = """
#include <iostream>
using namespace std;
int main(){
  cout << "hola mundo, desde post en python :D";
  cout << "Probando con otro mensaje con los params alterados y mejor formato";
}
"""

data_set = {
    "api_paste_code": source_code,
    "api_option": "paste",
    "api_paste_format": "cpp-winapi",
    "api_dev_key": API_KEY,
}

request = requests.post(url=API_ENDPOINT, data=data_set)

url_pastebin = request.text

print("El link pastebin es: %s" % url_pastebin)
