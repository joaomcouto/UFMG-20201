import json
import logging

from bson import json_util
from flask import Blueprint
from modules.db import get_db


orders_module = Blueprint("orders_module", __name__)
db = get_db()

#@orders_module.route("/user_id/<id_do_user>", methods=['GET'])
#def getOrder(id_do_user):
#    try:
#        #result = db["orders"].find_one({'user_id':id_do_user})
#        result = db["orders"].find()
#        return JSONEncoder().encode(result)

    #except Exception as err:
    #    logging.error(err)

@orders_module.route("/", methods=['GET'])
def getOrders():
    try:
        results = db["orders"].find()
        json_results = []
        for result in results:
            json_results.append(result)
        return json.dumps(json_results, default=json_util.default)


    except Exception as err:
        logging.error(err)
