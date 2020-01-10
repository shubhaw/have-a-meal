import React from 'react';

import styleClasses from './CheckoutFoodItem.module.css';
import { Typography } from '@material-ui/core';
import GroupButton from '../../UI/Button/GroupButton';

const CheckoutFoodItem = props => {
    return (
        <div className={styleClasses.CheckoutFoodItem}>
            <Typography variant="body1" className={styleClasses.foodName}>{props.foodName}</Typography>
            <GroupButton quantity={props.quantity} />
            <Typography variant="subtitle2" className={styleClasses.price}>₹{(props.price).toFixed(2)}</Typography>
        </div>
    )
}

export default CheckoutFoodItem;