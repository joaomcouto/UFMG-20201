from modules.utils import hash_password
import pymongo
import dotenv

dotenv.load_dotenv("../.env")
env = dotenv.dotenv_values()
db = None
client = None

def get_db():
    global client
    return client[env["DB_NAME"]]

def init_db(check_collections=True):
    global client
    if client == None:
        client = pymongo.MongoClient("mongodb+srv://{}:{}@servi-db.glfop.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority".format(
            env["DB_USER"],
            env["DB_PASS"]
        ))
        print("Connected to Mongo!")

    # Check colections
    if check_collections:
        db = get_db()
        ensureUserModel(db)

####################### Models ##################

def ensureUserModel(db):
    collections = db.collection_names()
    if "users" not in collections:
        db.create_collection("users")

    db["users"].create_index("nome")
    db["users"].create_index("email", unique=True)
    db["users"].create_index("senha")
    # db["users"].create_index("cpf", unique=True)
    db["users"].create_index("telefone")
    db["users"].create_index("endereco")
    db["users"].create_index("cidade")
    db["users"].create_index("bairro")


def userModel(nome, email, senha, telefone, endereco, cidade, bairro):
    senha = hash_password(senha)
    return {
        "nome":nome, 
        "email":email, 
        "senha":senha, 
        # "cpf":cpf, 
        "telefone":telefone, 
        "endereco":endereco, 
        "cidade":cidade, 
        "bairro":bairro,
    }



if __name__ == "__main__":
    init_db(check_collections=True)