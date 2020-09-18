from flask import Blueprint, request
from flask import jsonify
from modules.db import get_db
from modules.db import userModel

import json 

auth_module = Blueprint("auth_module", __name__)
db = get_db()

@auth_module.route("/")
def status():
    return 'Hello, World! From auth blueprint', 200

@auth_module.route("/register",  methods=['POST'])
def register():
    user_data = request.get_json()
    try:
        user = userModel(**user_data)
        try:
            db["users"].insert_one(user)
        except Exception as err:
            details = err._OperationFailure__details
            details["errmsg"] = list(details["keyValue"].keys())[0] + " já está em uso"
            return jsonify(details), 400
    
        return jsonify({"code":0}), 200
    except Exception as err:
        return jsonify({"code":1, "errmsg":err.args[0]}), 400
        pass
