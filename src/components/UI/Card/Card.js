import React from 'react';
import styleClasses from './Card.module.css';
import { Paper, Typography, Button } from '@material-ui/core';
import RatingStars from '../RatingStars/RatingStars';
import GroupButton from '../Button/GroupButton';
// import burgerImage from '../../../assets/images/burger.jpg';

const Card = (props) => {
    let button = <Button style={{width: '118px'}} size="small" variant="outlined" color="primary">Add</Button>;

    if (props.quantity && props.quantity > 0) {
        button = <GroupButton quantity={props.quantity} />
    }


    return (
        <Paper square={props.type !== 'restaurant'} className={styleClasses.Card} style={props.style}>
            <img src={props.image} width="80" height="80" alt={props.alt} className={styleClasses.image}></img>
            <Typography variant="h6" className={styleClasses.heading}>{props.title}</Typography>
            <Typography variant="body1" className={styleClasses.description}>{props.description}</Typography>
            <Typography variant="body1" className={styleClasses.amount}>{props.price}</Typography>
            <div className={styleClasses.variable}>
                {props.type === 'restaurant' ? <RatingStars rating={props.rating} /> : button}
            </div>
        </Paper>
    );
}

export default Card;