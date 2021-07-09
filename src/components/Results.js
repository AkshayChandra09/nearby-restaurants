import React from 'react'

const Results = ({ results }) => {
    return (
        <div>
            {results.map((restaurant) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{restaurant.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{restaurant.address}</h6>
                        <p class="card-text">{restaurant.ratings}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Results