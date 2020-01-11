import React from 'react';
import { useHistory } from 'react-router-dom';
import { Paper, Button, Typography } from '@material-ui/core';

import styleClasses from './CheckoutBar.module.css';

const CheckoutBar = ({totalQuantity, totalPrice}) => {
    const history = useHistory();

    const viewCartClickHandler = () => {
        console.log('View Cart Clicked', history)
        history.push('/checkout');
    }
    return (
        <Paper className={styleClasses.CheckoutBar} square elevation={5}>
            <Typography variant="subtitle2">
                {totalQuantity} Items | ₹{Number(totalPrice)}
            </Typography>
            <Button color="primary" variant="contained" size="small" onClick={viewCartClickHandler}>View Cart</Button>
        </Paper>
    )
}

export default CheckoutBar;