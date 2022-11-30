from flask import Flask,request,render_template, jsonify
from flasgger import Swagger
from routes.mongo_db.routes import mongo_db_routes

from flask_cors import CORS

import os

def create_app():
    app = Flask(__name__)
    swagger = Swagger(app)
    CORS(app)
    app.register_blueprint(mongo_db_routes, url_prefix='/mongo_db/')

    return app