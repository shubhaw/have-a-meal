import React from 'react';
import Toolbar from '../components/UI/Toolbar/Toolbar';
import Restaurants from '../components/Restaurants/Restaurants';
import FoodList from '../components/Food/FoodList';
import { Typography } from '@material-ui/core';
import CheckoutBar from '../components/Checkout/CheckoutBar/CheckoutBar';
import Checkout from '../components/Checkout/Checkout';

export default function Layout() {

    return (
        <React.Fragment>
            <Toolbar />
            <div style={{margin: '10px'}}>
                <Typography variant="h5">Restaurants</Typography>
                <Restaurants />
                <Typography variant="h5">Food List</Typography>
                <FoodList />
                <br />
                <Checkout restaurantName="Burfi Ghar" />
            </div>
            <CheckoutBar totalQuantity="9" totalPrice="1485" />
            <div style={{minHeight: '60px'}}></div>
        </React.Fragment>
    );
}