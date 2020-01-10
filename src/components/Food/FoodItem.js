import React from 'react';
import Card from '../UI/Card/Card';

const FoodItem = props => {
    return (
        <Card
            // style={{margin: '1px 0'}}
            type="foodItem"
            image={props.image}
            title={props.name}
            description={props.description}
            price={props.price}
            quantity={props.quantity}
        />
    )
}

export default FoodItem;