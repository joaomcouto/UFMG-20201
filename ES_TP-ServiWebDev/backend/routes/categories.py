import logging

from flask import Blueprint, request, jsonify
from modules.db import get_db

from backend.modules.db import categoryModel
from backend.modules.utils import JSONEncoder


categories_module = Blueprint("categories_module", __name__)
db = get_db()


@categories_module.route("/", methods=['GET'])
def getCategories():
    try:
        results = db["categories"].find()
        json_results = []
        for result in results:
            json_results.append(result)
        return JSONEncoder().encode(json_results)

    except Exception as err:
        logging.error(err)


@categories_module.route("/register", methods=['POST'])
def register():
    category_data = request.get_json()
    try:
        category = categoryModel(**category_data)
        try:
            db["categories"].insert_one(category)
        except Exception as err:
            details = err._OperationFailure__details
            details["errmsg"] = list(details["keyValue"].keys())[0] + " já está em uso"
            return jsonify(details), 400

        resp = jsonify(category)

        return resp, 200
    except Exception as err:
        return jsonify({"code": 1, "errmsg": err.args[0]}), 400
