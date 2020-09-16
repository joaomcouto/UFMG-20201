from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'


from routes.auth import auth_module
app.register_blueprint(auth_module, url_prefix="/auth")