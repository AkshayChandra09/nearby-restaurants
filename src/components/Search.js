import React, { Component } from 'react'

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        this.setState({
            searchQuery: e.target.value
        });
    }


    handleSubmit(e) {
        // validate user input for null
        debugger;
        alert('A name was submitted: ' + this.state.searchQuery);
        this.props.onSearch(this.state.searchQuery);
        e.preventDefault();
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" class="col-md-8" name="searchQuery" placeholder="Restaurant Name" value={this.state.searchQuery} onChange={this.handleChange} />
                    <button type="submit" disabled={!this.state.searchQuery}>Search</button>
                </form>
            </div>
        )
    }
}
