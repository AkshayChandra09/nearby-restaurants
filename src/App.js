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
    this.setState({restaurants:data['restaurants']});
  }

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
            {this.state.markers !== 'undefined' ? 
              <MapContainer markers={this.state.restaurants} /> : <h4></h4> 
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
