from flask import Blueprint, request
from flask import jsonify
from modules.db import get_db
from modules.db import userModel
from modules.utils import verify_password
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    jwt_refresh_token_required, create_refresh_token,
    get_jwt_identity, set_access_cookies,
    set_refresh_cookies, unset_jwt_cookies
)

import dotenv
dotenv.load_dotenv("../.env")

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

        email = user["email"]
        # Create the tokens we will be sending back to the user
        access_token = create_access_token(identity=email)
        refresh_token = create_refresh_token(identity=email)

        # Prepare return user
        user["_id"] = str(user["_id"])
        del user["senha"]
        resp = jsonify(user)
        
        # Set the JWT cookies in the response
        set_access_cookies(resp, access_token)
        set_refresh_cookies(resp, refresh_token)

        return resp, 200
    except Exception as err:
        return jsonify({"code":1, "errmsg":err.args[0]}), 400
        pass

@auth_module.route('/login', methods=['POST'])
def login():
    email = request.json.get('email', None)
    password = request.json.get('senha', None)

    user = db["users"].find_one({"email":email})
    if user:
        if verify_password(user["senha"], password):
            print("Login OK")
            # Create the tokens we will be sending back to the user
            access_token = create_access_token(identity=email)
            refresh_token = create_refresh_token(identity=email)

            # Prepare return user
            user["_id"] = str(user["_id"])
            del user["senha"]
            resp = jsonify(user)
            
            # Set the JWT cookies in the response
            set_access_cookies(resp, access_token)
            set_refresh_cookies(resp, refresh_token)

            return resp, 200
    details = {
        "errmsg":"Fail to authenticate",
        "code":401,
    }
    return jsonify(details), 401

# Same thing as login here, except we are only setting a new cookie
# for the access token.
@auth_module.route('/refresh', methods=['POST'])
@jwt_refresh_token_required
def refresh():
    # Create the new access token
    current_user = get_jwt_identity()
    access_token = create_access_token(identity=current_user)

    # Prepare return user
    user = db["users"].find_one({"email":current_user})
    user["_id"] = str(user["_id"])
    del user["senha"]
    resp = jsonify(user)

    # Set the JWT access cookie in the response
    set_access_cookies(resp, access_token)
    return resp, 200
    
# Same thing as login here, except we are only setting a new cookie
# for the access token.
@auth_module.route('/confirm', methods=['POST'])
@jwt_required
def confirm():
    # Create the new access token
    current_user = get_jwt_identity()

    # Prepare return user
    user = db["users"].find_one({"email":current_user})
    user["_id"] = str(user["_id"])
    del user["senha"]
    resp = jsonify(user)

    return resp, 200

@auth_module.route('/logout', methods=['POST'])
def logout():
    resp = jsonify({'logout': True})
    unset_jwt_cookies(resp)
    return resp, 200

@auth_module.route('/api/example', methods=['GET'])
@jwt_required
def protected():
    username = get_jwt_identity()
    return jsonify({'hello': 'from {}'.format(username)}), 200