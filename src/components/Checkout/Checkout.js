import React from 'react';
import { Typography, Paper, TextField } from '@material-ui/core';
import styleClasses from './Checkout.module.css';
import CheckoutFoodItem from './CheckoutFoodItem/CheckoutFoodItem';
import BillDetails from './BillDetails/BillDetails';

const Checkout = props => {
    const foodItemList = [
        {
            foodName: 'Jalebi (200gms)',
            quantity: 2,
            price: 1534.4895
        },
        {
            foodName: 'Rabdi (500gms)',
            quantity: 1,
            price: 210.00
        },
        {
            foodName: 'Samosa',
            quantity: 2,
            price: 50.00
        }
    ]

    return (
        <Paper className={styleClasses.Checkout}>
            <Typography variant="h5" component="h2">{props.restaurantName}</Typography>
            {
                foodItemList.map((foodItem, index) => <CheckoutFoodItem key={index} {...foodItem} />)
            }
            <TextField label="Note for restaurant" size="small" fullWidth />
            <br /><br />
            <BillDetails
                foodItemTotalPrice="1232.34"
                deliveryFee="0"
                packingCharges="10"
                taxes="19.28"
                totalPrice="2390"
            />
        </Paper>
    )
}

export default Checkout;