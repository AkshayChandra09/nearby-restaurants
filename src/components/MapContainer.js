import React, {Component} from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyD6z2UZv8AUvUvzIZV1USPRoyZf6zKVzw4");
Geocode.setLanguage("en");
Geocode.setRegion("us");
Geocode.setLocationType("RESTAURANT");


class MapContainer extends Component {
  constructor(props){
    super(props);
    this.mapStyles={
      height: "100vh",
        width: "100%"
    };
    this.defaultCenter={
      lat: 32.87275729016315, lng: -96.9335483861797
    };
    this.markers = [];
    this.api_key = 'AIzaSyDaQdXMCQ5Lj4FgnsOZte6DEkrTym2-Hhg';
    // this.loc = [{
    //   name: "test 1",
    //   coordinates: {
    //     lat: 32.87275729016315,
    //     lng: -96.9335483861797
    //   }
    // }];
    this.locations = [];
  }

  state={
    newMarkers: []
  }

  getCoordinates(){
    this.props.markers.map(restaurant => {
      Geocode.fromAddress(restaurant.vicinity).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          var coordinates= {
            lat: lat,
            lng: lng
          };
          this.locations.push({
            name: restaurant.name,
            coordinates: coordinates
          });
        },
        (error) => {
          console.error(error);
        }
      )
      });
      this.setState({newMarkers: this.locations});
  }

  render(){
    return (
      <div style={{marginLeft: '200px'}}>
          <LoadScript
              googleMapsApiKey={this.api_key} >
              <GoogleMap
                  mapContainerStyle={this.mapStyles}
                  zoom={13}
                  center={this.defaultCenter} onClick={this.getCoordinates}>
                   {
                      this.state.newMarkers.map(item => {
                        return (
                        <Marker key={item.name} position={item.coordinates}/>
                        )
                      })
                   }
              </GoogleMap>
            </LoadScript>
      </div>
    )
  }

}


export default MapContainer;
