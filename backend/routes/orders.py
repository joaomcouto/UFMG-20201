import json
import logging

from bson import json_util
from flask import Blueprint, request, jsonify
from modules.db import get_db
from bson.objectid import ObjectId
import datetime as dt

from backend.modules.db import orderModel
import bson
orders_module = Blueprint("orders_module", __name__)
db = get_db()


@orders_module.route("/", methods=['GET'])
def getOrder():
    try:
        userId = request.args.get('user_id')
        if userId is None:
            results = db["orders"].find()
            json_results = []
            for result in results:
                json_results.append(result)
            return json.dumps(json_results, default=json_util.default)
        else:
            results = db["orders"].find({'user_id': ObjectId(userId)})
            json_results = []
            for result in results:
                json_results.append(result)
            return json.dumps(json_results, default=json_util.default)

    except Exception as err:
        logging.error(err)


@orders_module.route("/register", methods=['POST'])
def register():
    order_data = request.get_json()
    order_data["user_id"] = bson.ObjectId(order_data["user_id"])
    order_data["service_id"] = bson.ObjectId(order_data["service_id"])
    order_data["data_inicio"] = dt.datetime.utcfromtimestamp(int(order_data["data_inicio"] / 1000))
    try:
        order = orderModel(**order_data)
        try:
            db["orders"].insert_one(order)
        except Exception as err:
            details = err._OperationFailure__details
            details["errmsg"] = list(details["keyValue"].keys())[0] + " já está em uso"
            return jsonify(details), 400

        resp = jsonify({"code": 200, "errmsg": ""})

        return resp, 200
    except Exception as err:
        print(err)
        return jsonify({"code": 1, "errmsg": err.args[0]}), 400
