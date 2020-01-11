import React, {useState, useEffect} from 'react';
import Restaurant from './Restaurant';
import axios from '../../axios-config';

import burgerImage from '../../assets/images/burger.jpg';

const Restaurants = (props) => {
    //#region hardcoded restaurant list
    // const restaurantList = [
    //     {
    //         name: 'Burfi Ghar',
    //         description: 'Burfi Ghar serves delicious sweets and street food.',
    //         image: burgerImage,
    //         priceForTwo: '₹200 for 2',
    //         rating: 5
    //     },
    //     {
    //         name: 'Olive Bistro',
    //         description: 'Best authentic Mexican food with lake side view!',
    //         image: burgerImage,
    //         priceForTwo: '₹1200 for 2',
    //         rating: 3
    //     },
    //     {
    //         name: 'Wich Please',
    //         description: 'Serves delicious sandwiches and wraps with cheesy dips.',
    //         image: burgerImage,
    //         priceForTwo: '₹500 for 2',
    //         rating: 4
    //     }
    // ];
    //#endregion

    const [restaurantList, setRestaurantList] = useState([]);

    useEffect(() => {
        axios.get('getRestaurants')
            .then(response => {
                console.log(response)
                const restaurants = response.data.map(restaurant => {
                    return {
                        ...restaurant,
                        image: burgerImage
                    }
                })
                setRestaurantList(restaurants);
            })
            .catch(err => console.error(err));
    }, []);

    const restaurantClickHandler = (id) => {
        console.log(props)
        console.log(id)

        props.history.push({
            pathname: '/restaurant/'+id
        });
    }
    
    return (
        <React.Fragment>
            {
                restaurantList.map((restaurant, index) => (
                    <Restaurant key={index}
                        {...restaurant}
                        onClick={() => restaurantClickHandler(restaurant.id)}
                    />
                ))
            }
        </React.Fragment>
    )
}

export default Restaurants;