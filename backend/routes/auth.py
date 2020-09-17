from flask import Blueprint
from modules.db import get_db

auth_module = Blueprint("auth_module", __name__)
db = get_db()

@auth_module.route("/")
def status():
    return 'Hello, World! From auth blueprint', 200

@auth_module.route("/register",  methods=['POST'])
def register():
    print(request)