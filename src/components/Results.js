import React, { Component } from 'react'

//Todo: Add pagination later
export default class Results extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const restaurants = this.props.results;

        return (
            <div>
                <h4><i>Search Results for: {this.props.searchQuery}</i></h4>
                <div style={{"flex": "2", "height": "750px", "overflow-y": "scroll"}}>
                    {restaurants && restaurants.map((restaurant) => (
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{restaurant.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Ratings: {restaurant.rating}</h6>
                                <p className="card-text">Address: {restaurant.vicinity}</p>
                            </div>
                        </div>
                    ))
                    }
                </div>     
            </div>
        )
    }
}
