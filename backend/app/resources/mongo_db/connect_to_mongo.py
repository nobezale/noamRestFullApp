import pymongo

def connect_mongo():
    client = pymongo.MongoClient(
        "mongodb+srv://noam:12345678noam@noamcluster.6grbnsp.mongodb.net/?retryWrites=true&w=majority")
    return client


def close_mongo_connection(client):
    client.close()
