import React from 'react';
import Search from './components/Search';
import Results from './components/Results';
import MapContainer from './components/MapContainer';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    currentLatitude: 0.00,
    currentLongitude: 0.00,
    searchQuery: '',
    restaurants: []
  }


  // fix this part
  // componentDidMount() {
    // navigator.geolocation.getCurrentPosition(function (position) {
    //   console.log("Latitude is :", position.coords.latitude);
    //   console.log("Longitude is :", position.coords.longitude);
    // });

    // const apiUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=[AIzaSyBDUO5FgkAiT03CHEBMYQ75ZNF13ucAfyw]&location=-32.863708646699656,-96.95087568907348&radius=5000&type=restaurant'; 
    // https://foodbukka.herokuapp.com/api/v1/restaurant?select=businessName, reviews, restauranttype&parkinglot=false&sort=businessName&page=2
  // }

  componentDidMount() {
    // fetch('http://127.0.0.1:5000/get_restaurants?search='+this.state.searchQuery)
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({restaurants: result.results})
    //     },
    //     (error) => {
    //       debugger;
    //       console.log(error);
    //     }
    //   )
  }


  handleQuery = (query) => {
    this.setState({searchQuery: query});
  }

  getResults = (data) => {
    debugger;
    this.setState({restaurants:data.Results});
  }

  render() {
    return (
      <div className="col-md-12">
        <center><h1><i>Tengo Hambre..</i></h1></center>
        <div className="col-md-4">
          <Search onSearch={this.handleQuery} getResults={this.getResults} /><br />
          
          {this.state.restaurants !== 'undefined' ?
            <Results restaurants={this.state.restaurants} searchQuery={this.state.searchQuery} />
            : <h4>No Records Found!</h4> 
          }
          {/* <MapContainer /> */}
        </div>
      </div>
    );
  }
}

export default App;
