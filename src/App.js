import React from 'react';
import Search from './components/Search';
// import Results from './components/Results';


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
  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(function (position) {
    //   console.log("Latitude is :", position.coords.latitude);
    //   console.log("Longitude is :", position.coords.longitude);
    // });

    // const apiUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=[AIzaSyBDUO5FgkAiT03CHEBMYQ75ZNF13ucAfyw]&location=-32.863708646699656,-96.95087568907348&radius=5000&type=restaurant'; 
    // fetch(apiUrl)
    //   .then(res => res.json())
    //   .then((data) => console.log(data))
    //   .catch(console.log);
  }

  handleQuery = (query) => {
    debugger;
    console.log(query);
    this.setState({searchQuery: query});
  }

  render() {
    return (
      <div className="col-md-12">
        <h1>Hello ..</h1>
        <div class="col-md-4">
          <Search onSearch={this.handleQuery} /><br />
          {/* <Results results={this.state.searchQuery} /> */}
          {/* <Map /> */}
          <p>{this.state.searchQuery}</p>
        </div>
      </div>
    );
  }
}

export default App;
