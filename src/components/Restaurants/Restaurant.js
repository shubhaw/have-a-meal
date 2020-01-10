import React from 'react';
import Card from '../UI/Card/Card';

const Restaurant = props => {
    return (
        <Card
            style={{ marginTop: '10px', marginBottom: '10px' }}
            type="restaurant"
            image={props.image}
            title={props.name}
            description={props.description}
            price={props.priceForTwo}
            rating={props.rating}
        />
    )
}

export default Restaurant;