from flask_cors import CORS
import requests
from flask import Flask, request

app = Flask(__name__)
CORS(app)

API_KEY = open("api_key.txt", "r")

@app.route('/places', methods=['GET'])
def find_places():
    searchQuery = request.args.get('search')
    location = request.args.get('location')
    parameters = {
        'location': location,
        'radius': 10000,
        'type': 'restaurant',
        'keyword': searchQuery,
        'key': 'AIzaSyBUtF9jRjxRyS0TBUHSSj3mK3uufw2a9a4'
    }
    response = requests.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json", params=parameters)
    data = response.json()['results'] if response.status_code == 200 else 'No restaurants matching this criteria!'
    results = {
     'restaurants': data
    }
    return results

