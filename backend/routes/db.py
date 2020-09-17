import sys
sys.path.append("..") 

from flask import Blueprint
from modules.db import get_db, init_db

db_module = Blueprint("db_module", __name__)
init_db()
db = get_db()

@db_module.route("/")
def status():
    return 'Hello, World! From db blueprint', 200
