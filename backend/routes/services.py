import logging

from flask import Blueprint, request, jsonify
from modules.db import get_db

from bson.objectid import ObjectId

from backend.modules.db import serviceModel
from backend.modules.utils import JSONEncoder
import bson

services_module = Blueprint("services_module", __name__)
db = get_db()


@services_module.route("/", methods=['GET'])
def getServices():
    try:
        serviceId = request.args.get('id')
        if serviceId is None:
            results = db["services"].find()
            json_results = []
            for result in results:
                result['categoria'] = db["categories"].find_one({'_id': ObjectId(result['categoria'])})['nome']
                json_results.append(result)
            return JSONEncoder().encode(json_results)
        else:
            result = db["services"].find_one({'_id': ObjectId(serviceId)})
            result['categoria'] = db["categories"].find_one({'_id': ObjectId(result['categoria'])})['nome']
            return JSONEncoder().encode(result)

    except Exception as err:
        logging.error(err)


@services_module.route("/<nome_do_servico>", methods=['GET'])
def getService(nome_do_servico):
    try:
        #Exact matching -> old
        #result = db["services"].find_one({'nome':nome_do_servico})

        #Initial attempt -> avoid double compilation
        regx = bson.regex.Regex(nome_do_servico)
        results = db["services"].find({'nome' : regx })
        json_results = []
        for result in results:
            if (result != None):
                result['categoria'] = db["categories"].find_one({'_id': ObjectId(result['categoria'])})['nome']
            json_results.append(result)
        return JSONEncoder().encode(json_results)




        #Javascript method
        #result = db["services"].find_one({'nome':{'$regex':nome_do_servico }})
        #return JSONEncoder().encode(result)

    except Exception as err:
        logging.error(err)


@services_module.route("/register", methods=['POST'])
def register():
    service_data = request.get_json()
    try:
        service = serviceModel(**service_data)
        try:
            db["services"].insert_one(service)
        except Exception as err:
            details = err._OperationFailure__details
            details["errmsg"] = list(details["keyValue"].keys())[0] + " já está em uso"
            return jsonify(details), 400

        resp = jsonify(service)

        return resp, 200
    except Exception as err:
        return jsonify({"code": 1, "errmsg": err.args[0]}), 400
