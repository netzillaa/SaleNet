import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import { Scrollbars } from "react-custom-scrollbars-2";
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import '../../../../css/Cart.css';
import Tab from '@mui/material/Tab';
import Header3 from '../../../Header3';
import Context from "../reducer/Context";
import { useState, useEffect, useContext } from 'react';
import PaymentTaps from "./PaymentTaps";
import axios from 'axios';

const theme = createTheme();

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color,
            backgroundColor: color,
            height: 1
        }}
    />
);

function OrderDetails() {
    const [DBcartItems, setCartItems] = useState([]);
    const [DBcartTotalPrice, setCartTotalPrice] = useState(0);
    const [DBcartId, setCartId] = useState(0);

    useEffect(() => {
        getCart();
    }, []);

    const getCart = async () => {
        await axios.get("http://localhost:4000/products/getOrder").then(res => {
            setCartItems(res.data.orderCart[0].items)
            setCartTotalPrice(res.data.orderCart[0].totalPrice)
            setCartId(res.data.orderCart[0]._id)
        }).catch(err => {
            console.log(err);
        })
    }


    const items = DBcartItems.map(item => {
        return (
            <div>
                <div
                    key={item}
                />
                <div className="items-info">
                    <div className="title">
                        <h4>{item.slice(1, -1)}</h4>
                    </div>
                </div>
            </div>
        )
    })

    const moveToCheckOut = () => {
        // clearCart()
        // calcTotalPrice()
    };

    return (
        <ThemeProvider theme={theme}>
            <Header3 />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <Paper variant="outlined" >
                    <Typography component="h1" variant="h4" align="center" style={{ padding: '3rem 1rem', border: '2px solid black' }}>
                        Order Details
                    </Typography>
                    <Grid >
                        <Grid container >
                            <PaymentTaps
                                DBcartTotalPrice={DBcartTotalPrice}
                            />
                            <div spacing={2} style={{ backgroundColor: 'lightblue', width: 350, height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <section className="main-cart-section">
                                    <h6 align="center">Order</h6>
                                    <div className="cart-items" style={{ height: 350, paddingTop: '20px' }}>
                                        <div className="cart-items-container">
                                            <Scrollbars>
                                                {items}
                                            </Scrollbars>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </Grid>
                    </Grid>
                    <Typography component="h1" variant="h4" align="center">
                    <Button style={{ margin: '1rem', fontSize: '2rem', padding: '1rem 6rem', color: '#fff', backgroundColor: '#349bf3', borderRadius: '0.5rem' }} onClick={() => moveToCheckOut()}>
                        Check Out
                    </Button>
                    </Typography>
                </Paper>
            </div>
        </ThemeProvider >
    )
}

export default OrderDetails;