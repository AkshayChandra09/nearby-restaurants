import React from 'react';
import Search from './components/Search';
import Results from './components/Results';
import MapContainer from './components/MapContainer';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    searchQuery: '',
    restaurants: []
  }


  handleQuery = (query) => {
    this.setState({searchQuery: query});
  }

  getResults = (data) => {
    debugger;
    this.setState({restaurants:data['restaurants']});
    debugger;
  }

  render() {
    return (
      <div className="col-md-12">
        <center><h1><i>Tengo Hambre..</i></h1></center>
        <div className="col-md-4">
          <Search onSearch={this.handleQuery} getResults={this.getResults} /><br />
          {this.state.restaurants !== 'undefined' ?
            <Results results={this.state.restaurants} searchQuery={this.state.searchQuery} />
            : <h4>No Records Found!</h4> 
          }
          {/* <MapContainer /> */}
        </div>
      </div>
    );
  }
}

export default App;
