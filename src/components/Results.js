import React, { Component } from 'react'

export default class Results extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const restaurants = this.props.restaurants;

        // optimize this logic later
        if(restaurants == 'undefined'){
            debugger;
            return null;
        }

        return (
            <div>
                <h4><i>Search Results for: {this.props.searchQuery}</i></h4>
                {restaurants && restaurants.map((restaurant) => (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{restaurant.Name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{restaurant.Ratings}</h6>
                            <p className="card-text">{restaurant.Type}</p>
                            <p className="card-text">{restaurant.Address}</p>
                            <p className="card-text">{restaurant.Hours}</p>
                        </div>
                    </div>
                ))
                }     
            </div>
        )
    }
}
