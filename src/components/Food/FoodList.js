import React, { useEffect, useReducer } from 'react';
import FoodItem from './FoodItem';
import CheckoutBar from '../Checkout/CheckoutBar/CheckoutBar';
import axios from '../../axios-config';
import burgerImage from '../../assets/images/burger.jpg';

const initialState = {
    isLoading: true,
    error: '',
    foodList: [],
    totalItems: 0,
    totalPrice: 0.00
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                error: '',
                foodList: [...action.foodList]
            };
        case 'FETCH_ERROR':
            return {
                ...state,
                isLoading: false,
                error: 'Something went wrong!!!',
                foodList: []
            };
        case 'RESET':
            return initialState;
        case 'INCREMENT_QUANTITY': {
            const updatedFoodList = [...state.foodList];
            const updatedFoodItemIndex = updatedFoodList.findIndex(foodItem => foodItem.id === action.id);
            updatedFoodList[updatedFoodItemIndex] = {
                ...state.foodList[updatedFoodItemIndex],
                quantity: action.quantity + 1
            }
            const totalPrice = state.totalPrice + Number(updatedFoodList[updatedFoodItemIndex].price)
            const totalItems = state.totalItems + 1

            return {
                ...state,
                foodList: updatedFoodList,
                totalItems,
                totalPrice
            }
        }
        case 'DECREMENT_QUANTITY': {
            const updatedFoodList = [...state.foodList];
            const updatedFoodItemIndex = updatedFoodList.findIndex(foodItem => foodItem.id === action.id);
            updatedFoodList[updatedFoodItemIndex] = {
                ...state.foodList[updatedFoodItemIndex],
                quantity: action.quantity - 1
            }
            const totalPrice = state.totalPrice - Number(updatedFoodList[updatedFoodItemIndex].price)
            const totalItems = state.totalItems - 1

            return {
                ...state,
                foodList: updatedFoodList,
                totalItems,
                totalPrice
            }
        }
        default:
            return state;
    }
}

const FoodList = (props) => {
    //#region hardcoded food list
    // const foodList = [
    //     {
    //         name: 'French Fries',
    //         description: 'Freshly sliced potatoes fried in olive oil. Served with mint chutney!',
    //         image: burgerImage,
    //         price: '₹200',
    //         quantity: 1
    //     },
    //     {
    //         name: 'Non Veg Platter',
    //         description: 'Best authentic Mexican food non veg platter.',
    //         image: burgerImage,
    //         price: '₹1200',
    //         quantity: 0
    //     },
    //     {
    //         name: 'Double Cheese Non Veg Burger',
    //         description: 'Delicious non veg burger with extra layer of cheese',
    //         image: burgerImage,
    //         price: '₹500',
    //         quantity: 2
    //     }
    // ];
    //#endregion

    const [state, dispatch] = useReducer(reducer, initialState);


    useEffect(() => {
        const restaurantId = props.match.params.restaurantId;
        axios.get(`getRestaurantFoodItems?id=${restaurantId}`)
            .then(response => {
                const foodItems = response.data.map(foodItem => {
                    return {
                        ...foodItem,
                        image: burgerImage,
                        quantity: 0
                    }
                });
                dispatch({ type: 'FETCH_SUCCESS', foodList: foodItems });
            })
            .catch(err => {
                dispatch({ type: 'FETCH_ERROR' });
                console.log(err);
            })
    }, [props.match.params.restaurantId])

    const displayFoodList = (
        state.foodList.map((foodItem, index) => (
            <FoodItem key={index}
                {...foodItem}
                onIncrementClick={
                    () => dispatch({
                        type: 'INCREMENT_QUANTITY',
                        id: foodItem.id,
                        quantity: foodItem.quantity
                    })
                }
                onDecrementClick={
                    () => dispatch({
                        type: 'DECREMENT_QUANTITY',
                        id: foodItem.id,
                        quantity: foodItem.quantity
                    })
                }
            />
        ))
    )

    const loadingIndicator = 'Loading . . .'
    return (
        <React.Fragment>
            {
                state.isLoading ? loadingIndicator : displayFoodList
            }
            <CheckoutBar totalQuantity={state.totalItems} totalPrice={state.totalPrice} />
        </React.Fragment>
    )
}

export default FoodList;