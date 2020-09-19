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
    client = pymongo.MongoClient("mongodb+srv://{}:{}@servi-db.glfop.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority".format(
        env["DB_USER"],
        env["DB_PASS"]
    ))
    print("Connected to Mongo!")

    # Check colections
    if check_collections:
        db = get_db()
        ensureUserModel(db)
        ensureServiceModel(db)
        ensureOrderModel(db)
        ensureCategoryModel(db)

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

def ensureServiceModel(db):
    collections = db.collection_names()
    if "services" not in collections:
        db.create_collection("services")

    db["services"].create_index("nome")
    db["services"].create_index("categoria")
    db["services"].create_index("nota")
    db["services"].create_index("endereco")
    db["services"].create_index("descricao")
    db["services"].create_index("finalizado")
    db["services"].create_index("imagem")


def serviceModel(nome, categoria, nota, endereco, descricao, finalizado, imagem):
    return {
        "nome":nome,
        "categoria":categoria,
        "nota":nota,
        "endereco":endereco,
        "descricao":descricao,
        "finalizado":finalizado,
        "imagem":imagem
    }


def ensureOrderModel(db):
    collections = db.collection_names()
    if "orders" not in collections:
        db.create_collection("orders")

    db["orders"].create_index("user_id")
    db["orders"].create_index("service_id")
    db["orders"].create_index("data_inicio")
    db["orders"].create_index("data_fim")
    db["orders"].create_index("finalizado")


def orderModel(user_id, service_id, data_inicio, data_fim, finalizado):
    return {
        "user_id":user_id,
        "service_id":service_id,
        "data_inicio":data_inicio,
        "data_fim":data_fim,
        "finalizado":finalizado,
    }


def ensureCategoryModel(db):
    collections = db.collection_names()
    if "categories" not in collections:
        db.create_collection("categories")

    db["categories"].create_index("nome")
    db["categories"].create_index("nota")


def categoryModel(nome, nota):
    return {
        "nome":nome,
        "nota":nota,
    }


if __name__ == "__main__":
    init_db(check_collections=True)