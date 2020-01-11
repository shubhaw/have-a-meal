import React from 'react';
import Card from '../UI/Card/Card';

const Restaurant = props => {
    return (
        <Card
            style={{ marginTop: '10px', marginBottom: '10px', cursor: 'pointer' }}
            type="restaurant"
            image={props.image}
            title={props.name}
            description={props.description}
            price={props.priceForTwo}
            rating={props.rating}
            onClick={props.onClick}
        />
    )
}

export default Restaurant;