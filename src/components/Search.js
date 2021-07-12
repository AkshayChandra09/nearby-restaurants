import React, { Component } from 'react'

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            results: []
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
        e.preventDefault();
        this.setState({searchQuery: e.target.value});
        this.props.onSearch(this.state.searchQuery);
        
        const requestOptions = {
            method: 'GET',
            headers: {'Access-Control-Allow-Origin': '*'}
        };

        var location='32.87375746034482,-96.93187025983217';

        fetch('http://127.0.0.1:5000/places?location='+location+'&search='+this.state.searchQuery, {mode: 'cors'})
        .then(res => res.json())
        .then(
            (result) => {
                debugger;
                this.setState({results: result});
                this.props.getResults(this.state.results);
                console.log(result)
            },
            (error) => {
                debugger;
                console.log(error);
            }
        )
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.setState({searchQuery: e.target.value});
    //     this.props.onSearch(this.state.searchQuery);
    //     fetch('http://127.0.0.1:5000/get_restaurants?search='+this.state.searchQuery)
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             this.props.getResults(this.state.results);
    //         },
    //         (error) => {
    //             debugger;
    //             console.log(error);
    //         }
    //     )
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="col-md-8" name="searchQuery" placeholder="Restaurant Name" value={this.state.searchQuery} onChange={this.handleChange} />
                    <button type="submit" disabled={!this.state.searchQuery}>Search</button>
                </form>
            </div>
        )
    }
}
