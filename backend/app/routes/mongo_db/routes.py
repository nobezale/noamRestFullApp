from flask import Flask, jsonify,Blueprint,request
from resources.mongo_db import mongo_handler


mongo_db_routes = Blueprint(
    'mongo_db_routes', __name__)

# client = pymongo.MongoClient(
#     "mongodb+srv://hananel:12345@clustermongo.tg5il.mongodb.net/appskin?retryWrites=true&w=majority")
# app.config['DB'] = client.get_database('salarymanagement')

# db = app.config['DB']

# # Specify the collection to be used
# col_employees = db.employees




# employees_list=[{"Name":"Moshe", "Address":"Jerusalem","Email":"mosh@gmail.com","Phone":"0501112223","MaritalStatus":"M","Gender":"F", "Salery":"40000"},{"Name":"Sara", "Address":"Jerusalem","Email":"sara@gmail.com","Phone":"0547778883","MaritalStatus":"M","Gender":"F", "Salery":"10000"}
# ,{"Name":"Shimon", "Address":"Jerusalem","Email":"shimi@gmail.com","Phone":"0525255551","MaritalStatus":"M","Gender":"F", "Salery":"70000"}]



@mongo_db_routes.route("/",  methods=['GET'])
def test():
        try:
            return jsonify(msg="hi"),200
        except:
            return jsonify(message="Error"), 500



@mongo_db_routes.route("/sign_up",  methods=['POST'])
def sign_up():
        try:
            user_data=request.get_json()
            res_add_user=mongo_handler.add_user(user_data)
            if not res_add_user:
                return jsonify(message="Error in sign up"), 400
            return jsonify(msg="user sign up successfully"),200
        except:
            return jsonify(message="Error"), 500



@mongo_db_routes.route("/sign_in",  methods=['GET'])
def sign_in():
        try:
            user_email=request.args.get("user_email")
            user_password=request.args.get("user_password")
            res_find_user=mongo_handler.find_user(user_email,user_password)
            print("res_find_user")
            print(res_find_user)
            if res_find_user==None:
                return jsonify(message="Error in sign in"), 400
            else:
                res_find_user.pop("_id")
            return jsonify(msg="user sign in successfully", user=res_find_user),200
        except:
            return jsonify(message="Error in sign_in"), 500

