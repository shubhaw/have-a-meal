import React from 'react';
import styleClasses from './BillItem.module.css';
import { Typography } from '@material-ui/core';

const BillItem = ({text, amount, style}) => {
    return (
        <div className={styleClasses.BillItem}>
            <Typography variant="body1" style={style}>{text}</Typography>
            <Typography variant="body1" style={style}>₹{Number(amount).toFixed(2)}</Typography>
        </div>
    )
}

export default BillItem;