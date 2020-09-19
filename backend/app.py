from modules.db import init_db
from flask import Flask
from flask_cors import CORS
import dotenv

from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    jwt_refresh_token_required, create_refresh_token,
    get_jwt_identity, set_access_cookies,
    set_refresh_cookies, unset_jwt_cookies
)

dotenv.load_dotenv(".env")
env = dotenv.dotenv_values()

app = Flask(__name__)
app.config['JWT_ACCESS_COOKIE_PATH'] = env["JWT_ACCESS_COOKIE_PATH"]
app.config['JWT_REFRESH_COOKIE_PATH'] = env["JWT_REFRESH_COOKIE_PATH"]
app.config['JWT_TOKEN_LOCATION'] = ['cookies']
app.config['SESSION_COOKIE_SAMESITE'] = None

# Set the secret key to sign the JWTs with
app.config['JWT_SECRET_KEY'] = env['JWT_SECRET_KEY']  # Change this!
app.config['JWT_COOKIE_CSRF_PROTECT'] = False

jwt = JWTManager(app)


CORS(app, supports_credentials=True)
init_db()

@app.route('/')
def hello_world():
    return 'Hello, World!'

from routes.auth import auth_module
app.register_blueprint(auth_module, url_prefix="/auth")

from routes.services import services_module
app.register_blueprint(services_module, url_prefix="/services")

from routes.categories import categories_module
app.register_blueprint(categories_module, url_prefix="/categories")

from routes.db import db_module
app.register_blueprint(db_module, url_prefix="/db")
