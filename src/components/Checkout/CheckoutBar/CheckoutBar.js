import React from 'react';
import { Paper, Button, Typography } from '@material-ui/core';

import styleClasses from './CheckoutBar.module.css';

const CheckoutBar = ({totalQuantity, totalPrice}) => {
    return (
        <Paper className={styleClasses.CheckoutBar} square elevation={5}>
            <Typography variant="subtitle2">
                {totalQuantity} Items | ₹{totalPrice}
            </Typography>
            <Button color="primary" variant="contained" size="small">View Cart</Button>
        </Paper>
    )
}

export default CheckoutBar;