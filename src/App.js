import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Layout from './layout/Layout';

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
            <div className="App">
                <Layout />
            </div>
        </ThemeProvider>
    );
}

export default App;
