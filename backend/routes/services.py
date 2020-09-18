import logging

from bson import json_util
from flask import Blueprint
from modules.db import get_db

import json

services_module = Blueprint("services_module", __name__)
db = get_db()


@services_module.route("/", methods=['GET'])
def get_services():
    try:
        services = list(db["services"].find())
        return json.dumps(services, default=json_util.default)
    except Exception as err:
        logging.error(err)
