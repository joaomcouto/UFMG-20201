import logging

from bson import json_util
from flask import Blueprint
from modules.db import get_db

import json

services_module = Blueprint("services_module", __name__)
db = get_db()


@services_module.route("/", methods=['GET'])
def getServices():
    try:
        results = db["services"].find()
        json_results = []
        for result in results:
            json_results.append(result)
        return json.dumps(json_results, default=json_util.default)
    except Exception as err:
        logging.error(err)


@services_module.route("/<nome_do_servico>", methods=['GET'])
def getService(nome_do_servico):
    try:
        result = db["services"].find_one({'nome':nome_do_servico})
        return json.dumps(result, default=json_util.default)
    except Exception as err:
        logging.error(err)
