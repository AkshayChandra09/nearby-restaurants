import React, { Component } from 'react'

export default class Results extends Component {
    constructor(props){
        super(props);
    }

    render() {
        debugger;
        const restaurants = this.props.results;

        return (
            <div>
                <h4><i>Search Results for: {this.props.searchQuery}</i></h4>
                {restaurants && restaurants.map((restaurant) => (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{restaurant.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{restaurant.rating}</h6>
                            <p className="card-text">{restaurant.vicinity}</p>
                        </div>
                    </div>
                ))
                }     
            </div>
        )
    }
}
