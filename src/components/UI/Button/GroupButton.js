import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import styleClasses from './GroupButton.module.css';

const GroupButton = (props) => {
    return (
        // <div className={styleClasses.buttonGroup}>
        //     <Button className={styleClasses.button} variant="contained" color="primary">-</Button>
        //     <Button className={styleClasses.button} disableTouchRipple variant="outlined">{quantity}</Button>
        //     <Button className={styleClasses.button} variant="contained" color="primary">+</Button>
        // </div>
        <ButtonGroup className={styleClasses.buttonGroup} size="small" aria-label="small outlined button group">
            <Button 
                className={styleClasses.button} variant="contained" color="primary" 
                onClick={props.onDecrementClick}>
                    -
            </Button>
            <Button 
                className={styleClasses.button} disableTouchRipple>
                    {props.quantity}
            </Button>
            <Button 
                className={styleClasses.button} variant="contained" color="primary"
                onClick={props.onIncrementClick}>
                    +
            </Button>
        </ButtonGroup>
    )
}

export default GroupButton;