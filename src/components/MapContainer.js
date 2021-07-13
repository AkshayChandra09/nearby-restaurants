import React, {Component} from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


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
    this.api_key = 'AIzaSyDaQdXMCQ5Lj4FgnsOZte6DEkrTym2-Hhg';
  }

  render(){
    return (
      <div style={{marginLeft: '200px'}}>
          <LoadScript
              googleMapsApiKey={this.api_key} >
              <GoogleMap
                  mapContainerStyle={this.mapStyles}
                  zoom={13}
                  center={this.defaultCenter} >
                   {
                      this.props.markers.map(item => {
                        return (
                        <Marker key={item.name} position={item.geometry.location}/>
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
