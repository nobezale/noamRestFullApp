from resources.mongo_db.connect_to_mongo import connect_mongo
client=connect_mongo()
db= client.get_database('NoamRestFullAppDB')
    # Specify the collection to be used
col_users = db.Users

def get_all_users():
    try:
        users_list=[]
        cursor = col_users.find({})#find all users
        for user in cursor:
            users_list.append({'Name':user['Name'],'Email':user['Email'],'Address':user["Address"],"Phone":user["Phone"],'MaritalStatus':user['MaritalStatus'],'Gender':user['Gender'],'Salery':user['Salery']})
        return users_list
    except:
            return "Error in get_all_users"

def find_user(user_email,user_password):
    try:
        user_in_mongo = col_users.find_one({"Email":user_email})
        if user_in_mongo['Password'] != user_password:
            return None
        if user_in_mongo:
            return user_in_mongo
        else: 
            return None
    except:
            return None



def add_user(user):
    try:
        name = user["Name"]
        password = user["Password"]
        email = user["Email"]
        address = user["Address"]
        phone = user["Phone"]
        maritalStatus=user['MaritalStatus']
        gender=user['Gender']
        salery=user['Salery']
        user_email_mongo = col_users.find_one({"Email": email})
        if user_email_mongo == None:#if user does not exist in DB
            col_users.insert_one(   
                    {'Name': name,'Password':password, 'Email': email,'Address':address, 'Phone':phone,'MaritalStatus' :maritalStatus,'Gender':gender, 'Salery':salery})
            return True
        else:
            return False
    except:
            return False