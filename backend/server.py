import os
from flask import Flask, jsonify, request
from flask_cors import CORS
# from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
from chatBot import getChat
from flask_pymongo import PyMongo
from flask_bcrypt import Bcrypt
from datetime import datetime, timedelta
from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv())

app = Flask(__name__)

app.config['MONGO_URI'] = os.environ['MONGO_URI']
app.config['SECRET_KEY'] = os.environ['JWT_KEY']

CORS(app)
bcrypt = Bcrypt(app)
db = PyMongo(app).db

  

@app.route('/login', methods=['POST', 'GET'])
def login():
    response = request.get_json()
    if response['userType'] == 'USER':
        user = db.users.find_one({'email': response['email']})
        if user:
            if bcrypt.check_password_hash(user['password'], response['password']):
                return jsonify({'login': True})
            return jsonify({'login': False, 'error': 'Incorrect Password'})
        return jsonify({'login': False, 'error': 'EmailId not registered'})
    elif response['userType'] == 'ORG':
        org = db.organisations.find_one({'email': response['email']})
        if org:
            if bcrypt.check_password_hash(org['password'], response['password']):
                return jsonify({'login': True, 'token': response['email']})
            return jsonify({'login': False, 'error': 'Incorrect Password'})
        return jsonify({'login': False, 'error': 'EmailId not registered'})


@app.route('/signup', methods=['POST', 'GET'])
def signup():
    response = request.get_json()
    if response['userType'] == 'USER':
        isUser = db.users.find_one({'email': response['email']})
        if isUser is None:
            hashed_pass = bcrypt.generate_password_hash(response['password']).decode('utf-8')
            db.users.insert_one({
                'name': response['name'],
                'email': response['email'],
                'password': hashed_pass,
                'nfts': []
            })
            return jsonify({'signup': True})
        return jsonify({'signup': False, 'error': 'EmailId already registered'})

    elif response['userType'] == 'ORG':
        isOrg = db.organisations.find_one({'email': response['email']})
        if isOrg is None:
            hashed_pass = bcrypt.generate_password_hash(response['password']).decode('utf-8')
            db.organisations.insert_one({
                'name': response['name'],
                'email': response['email'],
                'gstin': response['gstin'],
                'password': hashed_pass,
                'nfts': []
            })
            return jsonify({'signup': True})
        return jsonify({'signup': False, 'error': 'EmailId already registered'})


@app.route('/buyNFT', methods=['POST', 'GET'])
def buyNFT():
    response = request.get_json()
    db.users.find_one_and_update({'email': response['email']},
    {'$push': {'nfts':{
        'image': response['image'],
        'title': response['title'],
        'price': response['price'],
        'description': response['description']
    }}})
    return jsonify({'nft': True})


@app.route('/addNFT', methods=['POST', 'GET'])
def addNFT():
    response = request.get_json()
    db.organisations.find_one_and_update({'email': response['email']},
    {'$push': {'nfts': {
        'image': response['image'],
        'title': response['title'],
        'price': response['price'],
        'description': response['description']
    }}})
    return jsonify({'nft': True})


@app.route('/getNFTs', methods=['POST', 'GET'])
def getNFTs():
    response = request.get_json()
    nfts = db.users.find_one({'email': response['email']}, {'nfts': 1})
    return jsonify(nfts['nfts'])


@app.route("/getChat", methods=['POST', 'GET'])
def chatAPI():
    response = request.get_json()
    response = getChat(response['prompt'])
    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True)
