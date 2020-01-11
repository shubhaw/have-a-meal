import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Layout from './layout/Layout';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Restaurants from './components/Restaurants/Restaurants';
import FoodList from './components/Food/FoodList';
import Checkout from './components/Checkout/Checkout';

function App() {

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#E3632C'
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <div className="App">
                    <Layout>
                        <Switch>
                            <Route exact path="/checkout" component={Checkout} />
                            <Route exact path="/restaurant/:restaurantId" component={FoodList} />
                            <Route exact path="/" component={Restaurants} />
                        </Switch>
                    </Layout>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
