import React from 'react';
import { Typography } from '@material-ui/core';
import BillItem from './BillItem/BillItem';

const BillDetails = props => {
    return (
        <React.Fragment>
            <Typography component="h2" variant="h6">
                Bill Details
            </Typography>
            <BillItem text="Item Total" amount={props.foodItemTotalPrice} />
            <BillItem text="Delivery Fee" amount={props.deliveryFee} />
            <BillItem text="Restaurant Charges" amount={props.packingCharges} />
            <BillItem text="Taxes" amount={props.taxes} />
            <hr />
            <BillItem style={{fontWeight: 'bold'}} text="To Pay" amount={props.totalPrice} />
        </React.Fragment>
    )
}

export default BillDetails;