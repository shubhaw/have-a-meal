import React from 'react';
import FoodItem from './FoodItem';
import burgerImage from '../../assets/images/burger.jpg';

const FoodList = () => {
    const foodList = [
        {
            name: 'French Fries',
            description: 'Freshly sliced potatoes fried in olive oil. Served with mint chutney!',
            image: burgerImage,
            price: '₹200',
            quantity: 1
        },
        {
            name: 'Non Veg Platter',
            description: 'Best authentic Mexican food non veg platter.',
            image: burgerImage,
            price: '₹1200',
            quantity: 0
        },
        {
            name: 'Double Cheese Non Veg Burger',
            description: 'Delicious non veg burger with extra layer of cheese',
            image: burgerImage,
            price: '₹500',
            quantity: 2
        }
    ];

    return (
        <React.Fragment>
            {
                foodList.map((foodItem, index) => (
                    <FoodItem key={index}
                        {...foodItem}
                    />
                ))
            }
        </React.Fragment>
    )
}

export default FoodList;