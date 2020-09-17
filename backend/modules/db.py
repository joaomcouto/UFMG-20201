from pymongo import MongoClient
import dotenv
dotenv.load_dotenv("../.env")
env = dotenv.dotenv_values()

db = None
client = None

def get_db():
    global client
    return client

def init_db():
    global client
    client = MongoClient("mongodb+srv://{}:{}@servi-db.glfop.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority".format(
        env["DB_USER"],
        env["DB_PASS"]
    ))
    print("Connected to Mongo!")
