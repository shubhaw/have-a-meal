import React from 'react';
import Toolbar from '../components/UI/Toolbar/Toolbar';

export default function Layout(props) {

    return (
        <React.Fragment>
            <Toolbar />
            <main style={{margin: '10px'}}>
                {props.children}
            </main>
            {/* <CheckoutBar totalQuantity="9" totalPrice="1485" />
            <div style={{minHeight: '60px'}}></div> */}
            {/* <div style={{margin: '10px'}}>
                <Typography variant="h5">Restaurants</Typography>
                <Restaurants />
                <Typography variant="h5">Food List</Typography>
                <FoodList />
                <br />
                <Checkout restaurantName="Burfi Ghar" />
            </div>
            <CheckoutBar totalQuantity="9" totalPrice="1485" />
            <div style={{minHeight: '60px'}}></div> */}
        </React.Fragment>
    );
}