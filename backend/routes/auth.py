from flask import Blueprint

auth_module = Blueprint("auth_module", __name__)

@auth_module.route("/")
def status():
    return 'Hello, World! From auth blueprint', 200
