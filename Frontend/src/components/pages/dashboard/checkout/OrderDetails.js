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
import '../../../../css/OrderDetails.css';

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
    const [DBcartTotalPrice, setCartTotalPrice] = useState(0);
    const [DBcartId, setCartId] = useState(0);
    const [DBItems, setDBItems] = useState([]);

    const context = useContext(Context);

    useEffect(() => {
        getCart();
    }, []);

    const getCart = async () => {
        await axios.get("http://localhost:4000/products/getOrder").then(res => {

            let itemNameQuantity = [];

            for (let i = 0; i < res.data.orderCart[0].items.length; i++) {
                itemNameQuantity[i] = [res.data.orderCart[0].items[i], res.data.orderCart[0].itemQuantity[i], (res.data.orderCart[0].itemPrice[i] * res.data.orderCart[0].itemQuantity[i])];
            }

            setDBItems(itemNameQuantity)
            setCartTotalPrice(res.data.orderCart[0].totalPrice)
            setCartId(res.data.orderCart[0]._id)
        }).catch(err => {
            console.log(err);
        })
    }


    const items = DBItems.map(item => {
        return (
            <tr>
                <td>{item[0]}</td>
                <td class="aaalignright">{item[2]}</td>
            </tr>
        )
    })  

    const moveToCheckOut = () => {
        window.location.href = "http://localhost:3000/checkOut";
    };

    return (
        <ThemeProvider theme={theme}>
            <Header3 />
            <div style={{  display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <Paper variant="outlined" >
                    <Typography component="h1" variant="h4" align="center" style={{backgroundColor:"rgb(0, 1, 147)", color:"white",padding: '3rem 1rem' }}>
                        Order Details
                    </Typography>
                    <Grid >
                        <Grid container >
                            <PaymentTaps
                                DBcartTotalPrice={DBcartTotalPrice}
                            />
                            <table class="body-wrap">
                                <tbody><tr>
                                    <td></td>
                                    <td class="aacontainerr" width="600">
                                        <div class="aacontent">
                                            <table class="aamain" width="100%" cellpadding="0" cellspacing="0">
                                                <tbody><tr>
                                                    <td class="aacontent-wrap aligncenter">
                                                        <table width="100%" cellpadding="0" cellspacing="0">
                                                            <tbody><tr>
                                                                <td class="aacontent-block" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                    <h2>Order</h2>
                                                                </td>
                                                            </tr>
                                                                <tr>
                                                                    <td class="aacontent-block">
                                                                        <table class="aainvoice">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>
                                                                                        <table class="aainvoice-items" cellpadding="0" cellspacing="0">
                                                                                            <tbody>
                                                                                                {items}
                                                                                                <tr class="aatotal">
                                                                                                    <td class="aaalignright" width="80%">Total</td>
                                                                                                    <td class="aaalignright">RM {DBcartTotalPrice}</td>
                                                                                                </tr>
                                                                                            </tbody></table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody></table>
                                                                    </td>
                                                                </tr>
                                                            </tbody></table>
                                                    </td>
                                                </tr>
                                                </tbody></table></div>
                                    </td>
                                    <td></td>
                                </tr>
                                </tbody></table>
                        </Grid>
                    </Grid>
                    <Typography component="h1" variant="h4" align="center">
                        <Button style={{ margin: '1rem', fontSize: '2rem', padding: '1rem 6rem', backgroundColor:"rgb(0, 1, 147)", color:"white", borderRadius: '0.5rem' }} onClick={() => moveToCheckOut()}>
                            Check Out
                        </Button>
                    </Typography>
                </Paper>
            </div>
        </ThemeProvider >
    )
}

export default OrderDetails;