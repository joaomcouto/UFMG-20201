from modules.db import init_db
from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

init_db()

@app.route('/')
def hello_world():
    return 'Hello, World!'

from routes.auth import auth_module
app.register_blueprint(auth_module, url_prefix="/auth")

from routes.services import services_module
app.register_blueprint(services_module, url_prefix="/services")

from routes.db import db_module
app.register_blueprint(db_module, url_prefix="/db")
