
import json
import logging

from bson import json_util
from flask import Blueprint, request
from modules.db import get_db
from bson.objectid import ObjectId

from backend.modules.utils import JSONEncoder



orders_module = Blueprint("orders_module", __name__)
db = get_db()

# @orders_module.route("/user_id/<id_do_user>", methods=['GET'])
# def getOrder(id_do_user):
#     try:
#         results = db["orders"].find({'user_id':ObjectId(id_do_user)})
#         json_results = []
#         for result in results:
#             json_results.append(result)
#         #result = db["orders"].find()
#         #return JSONEncoder().encode(result)
#         return json.dumps(json_results, default=json_util.default)
#
#     except Exception as err:
#         logging.error(err)

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


# @orders_module.route("/", methods=['GET'])
# def getOrders():
#     try:
#         results = db["orders"].find()
#         json_results = []
#         for result in results:
#             json_results.append(result)
#         return json.dumps(json_results, default=json_util.default)
#
#
#     except Exception as err:
#         logging.error(err)
