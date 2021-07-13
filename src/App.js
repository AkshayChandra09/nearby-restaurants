import React from 'react';
import Search from './components/Search';
import Results from './components/Results';
import SimpleMap from './components/SimpleMap';
import MapContainer from './components/MapContainer';

import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyD6z2UZv8AUvUvzIZV1USPRoyZf6zKVzw4");
Geocode.setLanguage("en");
Geocode.setRegion("us");
Geocode.setLocationType("RESTAURANT");


class App extends React.Component {
  constructor(props) {
    super(props);
    this.tempMarkers=[];
  }

  state = {
    searchQuery: '',
    restaurants: [],
    markers: []
  }


  handleQuery = (query) => {
    this.setState({searchQuery: query});
  }

  getResults = (data) => {
    this.setState({restaurants:data['restaurants']});
    // this.getCoordinates();
    // debugger;
    // this.setState({markers: this.tempMarkers});
  }

 /* getCoordinates = () => {
    debugger
    var restaurants = this.state.restaurants
    if(restaurants != 'undefined'){
      if(restaurants.length > 0){
        restaurants.map(function(restaurant){
          Geocode.fromAddress(restaurant.vicinity).then(
            (response) => {
              const { lat, lng } = response.results[0].geometry.location;
              let new_obj = {
                name: restaurant.name,
                coordinates: {
                  lat: lat,
                  lng: lng
                }
              };
              this.tempMarkers.push(new_obj);
            },
            (error) => {
              console.error(error);
            }
          );
        });
      }
    }
    debugger;
  }
  */

  render() {
    return (
      <div className="col-md-12">
        <center><h1><i>Lista de restaurantes..</i></h1></center>
        <div className="row">
          <div className="col-md-4">
            <Search onSearch={this.handleQuery} getResults={this.getResults} /><br />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            {this.state.restaurants !== 'undefined' ?
              <Results results={this.state.restaurants} searchQuery={this.state.searchQuery} />
              : <h4>No Records Found!</h4> 
            }
          </div>
          <div className="col-md-6">
              <MapContainer markers={this.state.restaurants} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
