import React from 'react';
import Restaurant from './Restaurant';
import burgerImage from '../../assets/images/burger.jpg';

const Restaurants = () => {
    const restaurantList = [
        {
            name: 'Burfi Ghar',
            description: 'Burfi Ghar serves delicious sweets and street food.',
            image: burgerImage,
            priceForTwo: '₹200 for 2',
            rating: 5
        },
        {
            name: 'Olive Bistro',
            description: 'Best authentic Mexican food with lake side view!',
            image: burgerImage,
            priceForTwo: '₹1200 for 2',
            rating: 3
        },
        {
            name: 'Wich Please',
            description: 'Serves delicious sandwiches and wraps with cheesy dips.',
            image: burgerImage,
            priceForTwo: '₹500 for 2',
            rating: 4
        }
    ];

    return (
        <React.Fragment>
            {
                restaurantList.map((restaurant, index) => (
                    <Restaurant key={index}
                        {...restaurant}
                    />
                ))
            }
        </React.Fragment>
    )
}

export default Restaurants;