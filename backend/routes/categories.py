import logging

from flask import Blueprint
from modules.db import get_db


import json
from bson import ObjectId


class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)


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
